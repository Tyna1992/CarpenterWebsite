namespace CarpenterServer.Contracts;

public record OfferRequestEmail(string fromEmail, string name, string phone, string message);