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
    public async Task<ActionResult> UploadImage([FromForm] IFormFile file, [FromForm] Guid galleryId, [FromForm] string description)
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
        
        var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
        var filePath = Path.Combine(_folderPath, fileName);
        
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }
        
        var image = new ImageEntity()
        {
            Title = file.FileName,
            Id = new Guid(),
            UploadDate = DateTime.Today,
            FilePath = Path.Combine("Images", fileName),
            Description = description,
            GalleryId = galleryId
            
        };
        
       
        await _imageRepository.AddImage(image);
        
        return Ok(new {message = "Image uploaded successfully", imageId = image.Id});
    }
}