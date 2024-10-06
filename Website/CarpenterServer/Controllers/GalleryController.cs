using CarpenterServer.DTOs;
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
    
    [HttpPost("add")]
    public async Task<ActionResult> AddGallery([FromBody] GalleryCreateDto galleryDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        var gallery = new Gallery
        {
            Name = galleryDto.Name
        };
        await _galleryRepository.AddGallery(gallery);
        return Ok(gallery);
    }
    
    [HttpGet("getGallery/{id}")]
    public async Task<ActionResult<GalleryDto>> GetGallery(string id)
    {
        var gallery = await _galleryRepository.GetGalleryById(id);
        if (gallery == null)
        {
            return NotFound("Gallery not found");
        }

        var galleryDto = new GalleryDto
        {
            Id = gallery.Id,
            Name = gallery.Name,
            Images = gallery.Images.Select(img => new ImageEntityDto
            {
                Id = img.Id,
                Title = img.Title,
                FilePath = Url.Action("GetImage","Image", new { fileName = Path.GetFileName(img.FilePath) }),
                UploadDate = img.UploadDate,
                Description = img.Description
            }).ToList()
        };
        
        return Ok(galleryDto);
    }
    
    [HttpGet("getAll")]
    public async Task<ActionResult> GetAllGalleries()
    {
        var galleries = await _galleryRepository.GetAllGalleries();
        return Ok(galleries);
    }
}