namespace CarpenterServer.Model;

public class Review
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public int Rating { get; set; }
    public bool Verified { get; set; }
}