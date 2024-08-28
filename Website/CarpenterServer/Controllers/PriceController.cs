using CarpenterServer.Model;
using CarpenterServer.Service.Repositories;
using CarpenterServer.Service.Repositories.Prices;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;
[ApiController]
[Route("api/[controller]")]
public class PriceController : ControllerBase
{
    public readonly IPriceRepository _priceRepository;
    
    public PriceController(IPriceRepository priceRepository)
    {
        _priceRepository = priceRepository;
    }
    
    [HttpGet("GetAllPrices")]
    public async Task<ActionResult<IEnumerable<Pricelist>>> GetAllPrices()
    {
        var prices = await _priceRepository.GetAllPrices();
        if(!prices.Any())
        {
            return NotFound("No prices found.");
        }
        return Ok(prices);
    }
}