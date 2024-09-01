using System.IdentityModel.Tokens.Jwt;

namespace CarpenterServer.Service.Authentication;

public interface IAuthService
{
    Task<AuthResult> LoginAsync(string email, string password);
    JwtSecurityToken Verify(string token);
}