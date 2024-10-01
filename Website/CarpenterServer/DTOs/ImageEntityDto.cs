namespace CarpenterServer.DTOs;

public class ImageEntityDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string FilePath { get; set; }
    public DateTime UploadDate { get; set; }
    public string Description { get; set; }
}