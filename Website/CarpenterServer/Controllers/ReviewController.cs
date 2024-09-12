using CarpenterServer.Contracts;
using CarpenterServer.Model;
using CarpenterServer.Service.Repositories.Reviews;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarpenterServer.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ReviewController : ControllerBase
{
    private readonly IReviewRepository _reviewRepository;
    
    public ReviewController(IReviewRepository reviewRepository)
    {
        _reviewRepository = reviewRepository;
    }
    
    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Review>>> GetReviews()
    {
        var reviews = await _reviewRepository.GetReviewsAsync();
        if (!reviews.Any())
        {
            return NotFound("No reviews found.");
        }

        return Ok(reviews);
    }
    
    [HttpPut("Verify"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> VerifyReview([FromBody] Review request)
    {
        Console.WriteLine(request.Id +" "+ request.Verified + request.Name);
        var result = await _reviewRepository.VerifyReviewAsync(request.Id.ToString(), request.Verified);
        return Ok(result);
    }
    
    [HttpPost("Add")]
    public async Task<ActionResult> AddReview([FromBody]Review review)
    {
        var newReview = await _reviewRepository.AddReviewAsync(review);
        return CreatedAtAction(nameof(GetReviews), newReview);
    }
}