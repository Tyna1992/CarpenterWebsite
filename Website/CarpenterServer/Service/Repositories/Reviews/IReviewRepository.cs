using CarpenterServer.Model;

namespace CarpenterServer.Service.Repositories.Reviews;

public interface IReviewRepository
{
    Task<bool> VerifyReviewAsync(string reviewId, bool isVerified);
    Task<IEnumerable<Review>> GetReviewsAsync();
    
    Task<Review> AddReviewAsync(Review review);
}