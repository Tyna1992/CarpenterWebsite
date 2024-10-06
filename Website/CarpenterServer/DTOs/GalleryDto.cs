namespace CarpenterServer.DTOs;

public class GalleryDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public ICollection<ImageEntityDto> Images { get; set; } = new List<ImageEntityDto>();
}