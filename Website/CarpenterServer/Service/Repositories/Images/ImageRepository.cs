using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Service.Repositories.Images;

public class ImageRepository : IImageRepository
{
    private readonly DataContext _context;
    private readonly ILogger<ImageRepository> _logger;
    
    public ImageRepository(DataContext context, ILogger<ImageRepository> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    public async Task AddImage(ImageEntity image)
    {
        await _context.Images.AddAsync(image);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<ImageEntity>> GetAllImages()
    {
        return await _context.Images.ToListAsync();
    }

    public async Task<ImageEntity> GetImageById(Guid id)
    {
        var image = await _context.Images.FirstOrDefaultAsync(image => image.Id == id);
        return image;
    }

    public async Task DeleteImage(string id)
    {
        var image = await _context.Images.FirstOrDefaultAsync(image => image.Id.ToString() == id);
        if (image != null)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(),"wwwroot", image.FilePath);
            _logger.LogInformation($"Deleting file at path: {filePath}");
            
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
            
            _context.Images.Remove(image);
            await _context.SaveChangesAsync();
        }
    }
}