using CarpenterServer.Data;
using CarpenterServer.Model;

namespace CarpenterServer.Service.DatabaseSeeder;

public class Seeder : ISeeder
{
    private readonly DataContext _context;

    public Seeder(DataContext context)
    {
        _context = context;
    }

    public async Task SeedPrices()
    {
        if (!_context.Pricelists.Any())
        {
            var prices = new List<Pricelist>
            {
                new Pricelist { Job = "Asztalos munkadíj", Price = 5000 },
                new Pricelist { Job = "Lapraszerelt bútor összeszerelés", Price = 15000 },
                new Pricelist { Job = "Egyedi bútortervezés", Price = 25000 },
                new Pricelist { Job = "Bútorkészítés (szék)", Price = 20000 },
                new Pricelist { Job = "Bútorkészítés (asztal)", Price = 35000 },
                new Pricelist { Job = "Polcrendszer készítése", Price = 30000 },
                new Pricelist { Job = "Ajtókeret készítése", Price = 18000 },
                new Pricelist { Job = "Konyhabútor tervezés és kivitelezés", Price = 150000 },
                new Pricelist { Job = "Étkező bútor tervezés és kivitelezés", Price = 120000 }
            };
            
            await _context.Pricelists.AddRangeAsync(prices);
            await _context.SaveChangesAsync();
        }
    }

    public async Task SeedReviews()
    {
        if (!_context.Reviews.Any())
        {
            var reviews = new List<Review>
            {
                new Review { Name = "John Doe", Rating = 5, Content = "Minőségi munka, ajánlom!", Email = "j@gmail.com", Verified = true, CreatedAt = DateTime.Today},
                new Review { Name = "Jane Doe", Rating = 4, Content = "Remek munka, bár kicsit drága", Email = "jd@gmail.com", Verified = true, CreatedAt = DateTime.Today},
                new Review { Name = "Alice", Rating = 5, Content = "Nagyon elégedett vagyok", Email = "al@gmail.com", Verified = true, CreatedAt = DateTime.Today},
            };
            
            await _context.Reviews.AddRangeAsync(reviews);
            await _context.SaveChangesAsync();
            
        }
        
    }
}
