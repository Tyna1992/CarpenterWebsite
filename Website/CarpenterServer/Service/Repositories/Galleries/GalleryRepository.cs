using CarpenterServer.Data;
using CarpenterServer.DTOs;
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

    public async Task<IEnumerable<GalleryDto>> GetAllGalleries()
    {
        var galleries = await _context.Galleries
            .Include(g => g.Images) 
            .ToListAsync();

       
        return galleries.Select(gallery => new GalleryDto
        {
            Id = gallery.Id,
            Name = gallery.Name,
            Images = gallery.Images.Select(img => new ImageEntityDto
            {
                Id = img.Id,
                Title = img.Title,
                FilePath = img.FilePath,
                UploadDate = img.UploadDate,
                Description = img.Description
            }).ToList()
        });
    }

    public async Task<Gallery> GetGalleryById(string id)
    {
        return await _context.Galleries.Include(g => g.Images).FirstOrDefaultAsync(gallery => gallery.Id.ToString() == id);
        
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