using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories.Prices;

public interface IPriceRepository
{
    public Task<IEnumerable<Pricelist>> GetAllPrices();
    public Task<Pricelist> GetPriceByJob(string job);
    public Task<Pricelist> AddPrice(Pricelist price);
    public Task<Pricelist> UpdatePrice(string job, Pricelist price);
    public Task DeletePrice(string job);
    
}