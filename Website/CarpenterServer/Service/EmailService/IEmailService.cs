namespace CarpenterServer.Service.EmailService;

public interface IEmailService
{
   
    Task SendOfferRequestEmailAsync(string fromEmail, string name, string phone, string message);
}

