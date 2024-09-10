using CarpenterServer.Model;
using CarpenterServer.Service.Repositories.Partners;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;
[ApiController]
[Route("api/[controller]")]
public class PartnerController : ControllerBase
{
    private readonly IPartnerRepository _partnerRepository;
    
    public PartnerController(IPartnerRepository partnerRepository)
    {
        _partnerRepository = partnerRepository;
    }
    
    [HttpGet("GetAllPartners")]
    public async Task<ActionResult<IEnumerable<Partner>>> GetAllPartners()
    {
        var partners = await _partnerRepository.GetAllPartners();
        if (!partners.Any())
        {
            return NotFound("No partners found. Database is empty.");
        }

        return Ok(partners);
    }
    
    [HttpGet("GetPartnerBy/{name}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult<Partner>> GetPartnerByName(string name)
    {
        var partner = await _partnerRepository.GetPartnerByName(name);
        if(partner == null)
        {
            return NotFound($"No partner found with name '{name}'.");
        }
        return Ok(partner);
    }
    
    [HttpPost("AddPartner"),Authorize(Roles = "Admin")]
    public async Task<ActionResult> AddPartner([FromBody]Partner partner)
    {
        var newPartner = await _partnerRepository.AddPartner(partner);
        return CreatedAtAction(nameof(GetPartnerByName), new { name = newPartner.Name }, newPartner);
    }
    
    [HttpPut("UpdatePartner/{name}"), Authorize(Roles = "Admin")]   
    public async Task<ActionResult> UpdatePartner(string name, [FromBody]Partner partner)
    {
        var updatedPartner = await _partnerRepository.UpdatePartner(name, partner);
        if(updatedPartner == null)
        {
            return NotFound($"No partner found with name '{name}'.");
        }
        return Ok(updatedPartner);
    }
    
    [HttpDelete("DeletePartner/{name}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeletePartner(string name)
    {
        var result = await _partnerRepository.DeletePartner(name);
        if(result == null)
        {
            return NotFound($"No partner found with name '{name}'.");
        }
        return Ok(result);
    }
}