using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories.Galleries;

public interface IGalleryRepository
{
    Task AddGallery(Gallery gallery);
    Task<IEnumerable<Gallery>> GetAllGalleries();
    Task<Gallery> GetGalleryById(Guid id);
    Task DeleteGallery(Guid id);
}