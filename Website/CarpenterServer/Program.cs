using CarpenterServer.Data;
using CarpenterServer.Service.DatabaseSeeder;
using CarpenterServer.Service.EmailService;
using CarpenterServer.Service.Repositories.Prices;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

AddServices();
AddDbContext();
ConfigureSwagger();

var app = builder.Build();

using var scope = app.Services.CreateScope();
var seeder= scope.ServiceProvider.GetRequiredService<ISeeder>();
await seeder.SeedPrices();
await seeder.SeedReviews();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();


app.Run();

void AddDbContext()
{
    builder.Services.AddDbContext<DataContext>(options =>
    {
        options.UseSqlServer(
            "Server=localhost,1433;Database=CarpenterSite;User Id=sa;Password=Zakuro19920120;Encrypt=false;");
    });
}

void AddServices()
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddScoped<IPriceRepository, PriceRepository>();
    builder.Services.AddScoped<ISeeder,Seeder>();
    builder.Services.AddScoped<IEmailService, EmailService>();


}

void ConfigureSwagger()
{
    builder.Services.AddSwaggerGen(option =>
    {
        option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
        option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            In = ParameterLocation.Header,
            Description = "Please enter a valid token",
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            BearerFormat = "JWT",
            Scheme = "Bearer"
        });
        option.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                },
                new string[] { }
            }
        });
    });
}