namespace CarpenterServer.Model;

public class Gallery
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public ICollection<ImageEntity> Images { get; set; } = new List<ImageEntity>();
}