using CarpenterServer.DTOs;
using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories.Galleries;

public interface IGalleryRepository
{
    Task AddGallery(Gallery gallery);
    Task<IEnumerable<GalleryDto>> GetAllGalleries();
    Task<Gallery> GetGalleryById(string id);
    Task DeleteGallery(Guid id);
}