namespace CarpenterServer.Model;

public class ImageEntity
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string FilePath { get; set; }
    public DateTime UploadDate { get; set; }
    public Gallery Gallery { get; set; }
    public Guid GalleryId { get; set; }
}