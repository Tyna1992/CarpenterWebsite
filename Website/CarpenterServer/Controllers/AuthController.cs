using CarpenterServer.Service.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService  _authenticationService;
    
    public AuthController(IAuthService authenticationService)
    {
        _authenticationService = authenticationService;
    }

    [HttpPost("AdminLogin")]
    public async Task<ActionResult<AuthResponse>> LoginAsync([FromBody] AuthRequest request)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        Console.WriteLine(request.Email + " " + request.Password);
        var result = await _authenticationService.LoginAsync(request.Email, request.Password);

        if (!result.Success)
        {
            AddErrors(result);
            return BadRequest(ModelState);
        }
        
        Response.Cookies.Append("Authorization", result.Token, new CookieOptions()
        {
            HttpOnly = true
        });
        
        return Ok(new AuthResponse(result.Email, result.UserName));
    }
    
    [HttpGet("WhoAmI") , Authorize(Roles = "Admin, User")]
    public ActionResult<AdminResponse> WhoAmI()
    {
        var cookieString = Request.Cookies["Authorization"];
        Console.WriteLine(cookieString);

        var token = _authenticationService.Verify(cookieString);
        Console.WriteLine(token);
        if (token != null)
        {
            var claims = token.Claims;
            var email = claims.FirstOrDefault(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")?.Value;
            var username = claims.FirstOrDefault(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name")?.Value;
            return Ok(new AdminResponse(username, username));
        }
        return BadRequest("No token found");
    }
    
    [HttpPost("Logout"), Authorize(Roles = "Admin")]
    public ActionResult Logout()
    {
        Response.Cookies.Delete("Authorization");
        return Ok();
    }
    
    private void AddErrors(AuthResult result)
    {
        foreach (var error in result.ErrorMessages)
        {
            ModelState.AddModelError(error.Key, error.Value);
        }
    }
}