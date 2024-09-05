using CarpenterServer.Model;
using CarpenterServer.Service.Repositories;
using CarpenterServer.Service.Repositories.Prices;
using Microsoft.AspNetCore.Authorization;
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

    [HttpGet("GetAllPrices"), Authorize(Roles = "Admin")]
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
    
    [HttpPut("UpdatePrice")]
    public async Task<ActionResult> UpdatePrice([FromBody] Pricelist editedPrice)
    {
        var updatedPrice = await _priceRepository.UpdatePrice(editedPrice.Job, editedPrice.Price);
        
        return Ok(updatedPrice);
    }
    
    [HttpDelete("DeletePrice/{job}")]
    public async Task<ActionResult> DeletePrice(string job)
    {
        try
        {
            Console.WriteLine($"Deleting job '{job}'");
            var result = await _priceRepository.DeletePrice(job);
            if (result)
            {
                return NoContent(); 
            }
            else
            {
                return NotFound($"Job '{job}' not found."); // 404 if job is not found
            }
        }
        catch (Exception ex)
        {
            // Log the exception details for debugging
            Console.WriteLine($"Error deleting job '{job}': {ex.Message}");
            return StatusCode(500, "An error occurred while deleting the job."); // 500 Internal Server Error for unexpected errors
        }
    }
    
    
}