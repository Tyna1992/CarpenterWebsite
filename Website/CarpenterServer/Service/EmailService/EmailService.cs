using System.Net;
using System.Net.Mail;

namespace CarpenterServer.Service.EmailService;

public class EmailService : IEmailService
{

    private readonly SmtpClient _client = new("smtp.gmail.com", 587)
    {
        EnableSsl    = true,
        UseDefaultCredentials = false,
        Credentials = new NetworkCredential("asztalostesztemail@gmail.com", "onsq xjmk unml kjrg")
    };
    
   

    public async Task SendOfferRequestEmailAsync(string fromEmail, string name, string phone, string message)
    {
        var mailMessge = new MailMessage
        {
            From = new MailAddress(fromEmail),
            Subject = "Offer Request",
            Body = $"Name: {name}\nPhone: {phone}\nMessage: {message}",
            IsBodyHtml = false
        };
        
        mailMessge.To.Add("asztalostesztemail@gmail.com");
        mailMessge.ReplyToList.Add(new MailAddress(fromEmail));
        await _client.SendMailAsync(mailMessge);
    }
}