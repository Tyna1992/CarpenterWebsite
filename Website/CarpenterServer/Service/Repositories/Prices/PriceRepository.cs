using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Service.Repositories.Prices;

public class PriceRepository : IPriceRepository
{
    
    private readonly DataContext _context;
    
    public PriceRepository(DataContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Pricelist>> GetAllPrices()
    {
        return await _context.Pricelists.ToListAsync();
    }

    public async Task<Pricelist> GetPriceByJob(string job)
    {
        var price = await _context.Pricelists.FirstOrDefaultAsync(price => price.Job == job);
        return price;
    }

    public async Task<Pricelist> AddPrice(Pricelist price)
    {
        await _context.Pricelists.AddAsync(price);
        await _context.SaveChangesAsync();
        return price;
    }

    public async Task<Pricelist> UpdatePrice(string job, decimal price)
    {
        var existingPrice = await _context.Pricelists.FirstOrDefaultAsync(jobs => jobs.Job == job);
        if (existingPrice != null)
        {
            existingPrice.Price = price;
            await _context.SaveChangesAsync();
        }
        return existingPrice;
    }

    public async Task DeletePrice(string job)
    {
        var price = await _context.Pricelists.FirstOrDefaultAsync(jobs => jobs.Job == job);
        if (price != null)
        {
            _context.Pricelists.Remove(price);
            await _context.SaveChangesAsync();
        }
    }
}