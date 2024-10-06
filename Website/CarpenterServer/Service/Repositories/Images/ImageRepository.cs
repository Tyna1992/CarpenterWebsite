using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Service.Repositories.Images;

public class ImageRepository : IImageRepository
{
    private readonly DataContext _context;
    
    public ImageRepository(DataContext context)
    {
        _context = context;
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
            _context.Images.Remove(image);
            await _context.SaveChangesAsync();
        }
    }
}