using CarpenterServer.Model;

namespace CarpenterServer.Service.Authentication;

public interface ITokenService
{
    string CreateToken(Admin adminUser, string role);
}