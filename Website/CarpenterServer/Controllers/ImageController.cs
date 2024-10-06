using CarpenterServer.Model;
using CarpenterServer.Service.Repositories.Images;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;
[ApiController]
[Route("api/[controller]")]

public class ImageController : ControllerBase
{
    private readonly IImageRepository _imageRepository;
    private readonly string _folderPath;
    
    public ImageController(IImageRepository imageRepository, IWebHostEnvironment env)
    {
        _imageRepository = imageRepository;
        _folderPath = Path.Combine(env.WebRootPath, "Images");
        if (!Directory.Exists(_folderPath))
        {
            Directory.CreateDirectory(_folderPath);
        }
    }
    
    [HttpPost("upload")]
    public async Task<ActionResult> UploadImage([FromForm] IFormFile file, [FromForm] Guid galleryId, [FromForm] string description, [FromForm] string title)
    {
        if (file == null)
        {
            return BadRequest("No file was uploaded");
        }
        
        if (galleryId == Guid.Empty)
        {
            return BadRequest("Invalid gallery ID");
        }
        
        Console.WriteLine($"Uploading to Gallery ID: {galleryId}");
        
        var filePath = Path.Combine(_folderPath, file.FileName);
        
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }
        
        var image = new ImageEntity()
        {
            Title = title,
            Id = Guid.NewGuid(),
            UploadDate = DateTime.Today,
            FilePath  = Path.Combine("Images", file.FileName).Replace("\\", "/"),
            Description = description,
            GalleryId = galleryId
            
        };
        
       
        await _imageRepository.AddImage(image);
        
        return Ok(new {message = "Image uploaded successfully", imageId = image.Id, filePath= Url.Content($"~/Images/{file.FileName}")});
    }
    
    [HttpDelete("delete/{id}")]
    public async Task<ActionResult> DeleteImage(string id)
    {
        await _imageRepository.DeleteImage(id);
        return Ok("Image deleted successfully");
    }

    [HttpGet("get/{fileName}")]
    public IActionResult GetImage(string fileName)
    {
        var filePath = Path.Combine(_folderPath, fileName);
        
        if (!System.IO.File.Exists(filePath))
        {
            return NotFound("Image not found");
        }
        
        var image = System.IO.File.OpenRead(filePath);
        return File(image, "image/jpeg");
    }
}