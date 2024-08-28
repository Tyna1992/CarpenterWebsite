using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories;

public class PriceRepository : IPriceRepository
{
    public async Task<IEnumerable<Pricelist>> GetAllPrices()
    {
        throw new NotImplementedException();
    }

    public async Task<Pricelist> GetPriceByJob(string job)
    {
        throw new NotImplementedException();
    }

    public async Task<Pricelist> AddPrice(Pricelist price)
    {
        throw new NotImplementedException();
    }

    public async Task<Pricelist> UpdatePrice(string job, Pricelist price)
    {
        throw new NotImplementedException();
    }

    public async Task DeletePrice(string job)
    {
        throw new NotImplementedException();
    }
}