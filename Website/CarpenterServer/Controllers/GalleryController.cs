using CarpenterServer.Model;
using CarpenterServer.Service.Repositories.Galleries;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;
[ApiController]
[Route("api/[controller]")]
public class GalleryController : ControllerBase
{
    private readonly IGalleryRepository _galleryRepository;
    
    public GalleryController(IGalleryRepository galleryRepository)
    {
        _galleryRepository = galleryRepository;
    }
    
    [HttpPost("AddGallery")]
    public async Task<ActionResult> AddGallery([FromBody] Gallery gallery)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        await _galleryRepository.AddGallery(gallery);
        
        foreach (var image in gallery.Images)
        {
            image.GalleryId = gallery.Id; 
        }
        return Ok(gallery);
    }
}