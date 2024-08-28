using CarpenterServer.Service.Repositories;
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
}