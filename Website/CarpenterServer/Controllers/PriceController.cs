using CarpenterServer.Model;
using CarpenterServer.Service.Repositories;
using CarpenterServer.Service.Repositories.Prices;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PriceController : ControllerBase
{
    private readonly IPriceRepository _priceRepository;

    public PriceController(IPriceRepository priceRepository)
    {
        _priceRepository = priceRepository;
    }

    [HttpGet("GetAllPrices")]
    public async Task<ActionResult<IEnumerable<Pricelist>>> GetAllPrices()
    {
        var prices = await _priceRepository.GetAllPrices();
        if (!prices.Any())
        {
            return NotFound("No prices found.");
        }

        return Ok(prices);
    }

    [HttpGet("GetPriceBy/{job}")]
    public async Task<ActionResult<Pricelist>> GetPriceByJob(string job)
    {
        var price = await _priceRepository.GetPriceByJob(job);
        return Ok(price);
    }
    
    [HttpPost("AddPrice")]
    public async Task<ActionResult> AddPrice(Pricelist price)
    {
        var newPrice = await _priceRepository.AddPrice(price);
        return CreatedAtAction(nameof(GetPriceByJob), new { job = newPrice.Job }, newPrice);
    }
    
    [HttpPut("UpdatePrice/{job}/{price}")]
    public async Task<ActionResult> UpdatePrice(string job, decimal price)
    {
        var updatedPrice = await _priceRepository.UpdatePrice(job, price);
        return Ok(updatedPrice);
    }
    
    [HttpDelete("DeletePrice/{job}")]
    public async Task<ActionResult> DeletePrice(string job)
    {
        await _priceRepository.DeletePrice(job);
        return NoContent();
    }
    
    
}