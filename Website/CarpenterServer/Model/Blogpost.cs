namespace CarpenterServer.Model;

public class Blogpost
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Subject { get; set; }
}