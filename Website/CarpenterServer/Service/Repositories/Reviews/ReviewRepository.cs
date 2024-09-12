using CarpenterServer.Data;
using CarpenterServer.Model;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Service.Repositories.Reviews;

public class ReviewRepository : IReviewRepository
{
    private readonly DataContext _context;
    
    public ReviewRepository(DataContext context)
    {
        _context = context;
    }
    
    public async Task<bool> VerifyReviewAsync(string reviewId, bool isVerified)
    {
        try
        {
            var review = await _context.Reviews.FirstOrDefaultAsync(r => r.Id.ToString() == reviewId);
            if (review != null) review.Verified = isVerified;
            await _context.SaveChangesAsync();
            return isVerified;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return isVerified;
            
        }
    }
    
    public async Task<IEnumerable<Review>> GetReviewsAsync()
    {
        return await _context.Reviews.ToListAsync();
    }
    
    
    public async Task<Review> AddReviewAsync(Review review)
    {
        
            review.Id = Guid.NewGuid();
            review.CreatedAt = DateTime.Today;
            review.Verified = false;
            await _context.Reviews.AddAsync(review);
            await _context.SaveChangesAsync();
            return review;
        
    }
}