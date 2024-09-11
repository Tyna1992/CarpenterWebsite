namespace CarpenterServer.Service.DatabaseSeeder;

public interface ISeeder
{
    Task SeedPrices();
    Task SeedReviews();
    Task SeedPartners();
}