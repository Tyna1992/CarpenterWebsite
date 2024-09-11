using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Service.Repositories.Partners;

public class PartnerRepository : IPartnerRepository
{
    
    private readonly DataContext _context;
    
    public PartnerRepository(DataContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Partner>> GetAllPartners()
    {
        return await _context.Partners.ToListAsync();
    }

    public async Task<Partner> GetPartnerByName(string name)
    {
        var partner = await _context.Partners.FirstOrDefaultAsync(partner => partner.Name == name);
        return partner;
    }

    public async Task<Partner> AddPartner(Partner partner)
    {
        await _context.Partners.AddAsync(partner);
        await _context.SaveChangesAsync();
        return partner;
    }

    public async Task<Partner> UpdatePartner( Partner partner)
    {
        var existingPartner = await _context.Partners.FirstOrDefaultAsync(partners => partners.Name == partner.Name);
        if (existingPartner != null)
        {
            existingPartner.Name = partner.Name;
            existingPartner.Description = partner.Description;
            existingPartner.Website = partner.Website;
            existingPartner.Products = partner.Products;
            await _context.SaveChangesAsync();
        }
        return existingPartner;
    }

    public async Task<Partner?> DeletePartner(string name)
    {
        var partner = await _context.Partners.FirstOrDefaultAsync(partners => partners.Name == name);
        if (partner != null)
        {
            _context.Partners.Remove(partner);
            await _context.SaveChangesAsync();
        return partner;
        }
        else
        {
            return null;
        }
    }
}