using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Service.Repositories.Galleries;

public class GalleryRepository : IGalleryRepository
{
    
    private readonly DataContext _context;
    
    public GalleryRepository(DataContext context)
    {
        _context = context;
    }
    
    public async Task AddGallery(Gallery gallery)
    {
        await _context.Galleries.AddAsync(gallery);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<Gallery>> GetAllGalleries()
    {
        return await _context.Galleries.ToListAsync();
    }

    public async Task<Gallery> GetGalleryById(Guid id)
    {
        var gallery = await _context.Galleries.FirstOrDefaultAsync(gallery => gallery.Id == id);
        return gallery;
    }

    public async Task DeleteGallery(Guid id)
    {
        var gallery = await _context.Galleries.FirstOrDefaultAsync(gallery => gallery.Id == id);
        if (gallery != null)
        {
            _context.Galleries.Remove(gallery);
            await _context.SaveChangesAsync();
        }
    }
}