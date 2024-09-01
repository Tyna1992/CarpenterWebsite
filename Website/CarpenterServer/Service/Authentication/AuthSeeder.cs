using CarpenterServer.Model;
using Microsoft.AspNetCore.Identity;

namespace CarpenterServer.Service.Authentication;

public class AuthSeeder 
{
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<Admin> _userManager;
    private readonly ILogger<AuthSeeder> _logger;
   

    public AuthSeeder(RoleManager<IdentityRole> roleManager, UserManager<Admin> userManager, ILogger<AuthSeeder> logger)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _logger = logger;
        
    }

    public async Task SeedAsync()
    {
        _logger.LogInformation("Starting seeder execution...");
        await CreateAdminRole();
        await CreateAdminIfNotExists();
    }
    
   

    private async Task CreateAdminIfNotExists()
    {
        _logger.LogInformation("Checking if Admin role exists...");
        var adminInDb = await _userManager.FindByEmailAsync("admin@admin.com");
        
        if (adminInDb == null)
        {
            _logger.LogInformation("Admin user not found. Creating admin user...");
            var admin = new Admin { Email = "admin@admin.com", UserName = "admin"};
            var adminCreated = await _userManager.CreateAsync(admin, "admin123456");

            if (adminCreated.Succeeded)
            {
                _logger.LogInformation("Admin user created successfully. Adding user to Admin role...");
                await _userManager.AddToRoleAsync(admin, "Admin");
            }
        }
    }

     

    private async Task CreateAdminRole()
    {
        _logger.LogInformation("Checking if admin user exists...");
        if (!await _roleManager.RoleExistsAsync("Admin"))
        {
            var result = await _roleManager.CreateAsync(new IdentityRole("Admin"));
            if (result.Succeeded)
            {
                _logger.LogInformation("Admin role created successfully.");
            }
            else
            {
                _logger.LogError("Failed to create admin role: {Errors}", string.Join(", ", result.Errors));
            }
        }
    }

   
}