using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories.Partners;

public interface IPartnerRepository
{
    public Task<IEnumerable<Partner>> GetAllPartners();
    public Task<Partner> GetPartnerByName(string name);
    public Task<Partner> AddPartner(Partner partner);
    public Task<Partner> UpdatePartner( Partner partner);
    public Task<Partner?> DeletePartner(string id);
    
}