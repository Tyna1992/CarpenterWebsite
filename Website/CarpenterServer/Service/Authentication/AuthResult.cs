namespace CarpenterServer.Service.Authentication;

public record AuthResult(
    bool Success,
    string Email,
    string Token)
{
    //Error code - error message
    public readonly Dictionary<string, string> ErrorMessages = new();
}
