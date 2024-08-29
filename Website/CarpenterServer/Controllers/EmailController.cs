using CarpenterServer.Contracts;
using CarpenterServer.Service.EmailService;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;
[ApiController]
[Route("api/[controller]")]
public class EmailController : ControllerBase
{
    private readonly IEmailService _emailService;
    
    public EmailController(IEmailService emailService)
    {
        _emailService = emailService;
    }
    
    [HttpPost("sendOfferRequestEmail")]
    public async Task<IActionResult> SendOfferRequestEmail([FromBody] OfferRequestEmail request)
    {
        try
        {
            Console.WriteLine(request.fromEmail);
            await _emailService.SendOfferRequestEmailAsync(request.fromEmail, request.name, request.phone, request.message);
            
            return Ok("Email sent successfully.");
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }
}