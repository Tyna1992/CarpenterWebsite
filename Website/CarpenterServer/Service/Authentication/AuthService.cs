using System.IdentityModel.Tokens.Jwt;
using System.Text;
using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace CarpenterServer.Service.Authentication;

public class AuthService : IAuthService
{
    private readonly UserManager<Admin> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IConfiguration _configuration;
    
    
    
    public AuthService(UserManager<Admin> userManager,
        ITokenService tokenService, IConfiguration configuration
        )
    {
        _userManager = userManager;
        _tokenService = tokenService;
        _configuration = configuration;
        
    }
    
    public async Task<AuthResult> LoginAsync(string email, string password)
    {
        var managedUser = await _userManager.FindByEmailAsync(email);

        if (managedUser == null)
        {
            return InvalidUsername(email);
        }
        
        
        var isPasswordValid = await _userManager.CheckPasswordAsync(managedUser, password);
        if (!isPasswordValid)
        {
            return InvalidPassword(email);
        }

        var roles = await _userManager.GetRolesAsync(managedUser);
        var accessToken = _tokenService.CreateToken(managedUser, roles[0]);
        return new AuthResult(true, managedUser.Email,managedUser.UserName, accessToken);
    }
    
    public JwtSecurityToken Verify(string token)
    {
        try
        {
            Console.WriteLine($"Verifying token: {token}");
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration.GetSection("IssuerSigningKey").Value);
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);
            return (JwtSecurityToken)validatedToken;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception in Verify method: {ex}");
            throw;
        }
    }
    
    private static AuthResult InvalidUsername(string email)
    {
        var result = new AuthResult(false, "", "", "");
        result.ErrorMessages.Add("Bad credentials", "Invalid username");
        return result;
    }
    private static AuthResult InvalidPassword(string email)
    {
        var result = new AuthResult(false, email, "","");
        result.ErrorMessages.Add("Bad credentials", "Invalid password");
        return result;
    }
}