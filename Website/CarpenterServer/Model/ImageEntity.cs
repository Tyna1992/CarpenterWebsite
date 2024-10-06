
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Model;

public class ImageEntity
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    [FromForm(Name = "description")]
    public string Description { get; set; }
    public string FilePath { get; set; }
    public DateTime UploadDate { get; set; }
    public Gallery Gallery { get; set; }
    [FromForm(Name = "galleryId")]
    public Guid GalleryId { get; set; }
}