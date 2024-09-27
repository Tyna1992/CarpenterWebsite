using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories.Images;

public interface IImageRepository
{
    Task AddImage(ImageEntity image);
    Task<IEnumerable<ImageEntity>> GetAllImages();
    Task<ImageEntity> GetImageById(Guid id);
    Task DeleteImage(Guid id);
    
}