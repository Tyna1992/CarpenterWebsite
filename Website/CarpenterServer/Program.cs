using System.Text;
using CarpenterServer.Data;
using CarpenterServer.Model;
using CarpenterServer.Service.Authentication;
using CarpenterServer.Service.DatabaseSeeder;
using CarpenterServer.Service.EmailService;
using CarpenterServer.Service.Repositories.Prices;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

AddServices();
AddDbContext();
AddIdentity();
ConfigureSwagger();
AddAuthentication();

var app = builder.Build();

using var scope = app.Services.CreateScope();
var seeder= scope.ServiceProvider.GetRequiredService<ISeeder>();
await seeder.SeedPrices();
await seeder.SeedReviews();

var authenticationSeeder = scope.ServiceProvider.GetRequiredService<AuthSeeder>();
await authenticationSeeder.SeedAsync();


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
    var connectionString = builder.Configuration.GetConnectionString("Database");
    builder.Services.AddDbContext<DataContext>(options =>
    {
        options.UseSqlServer(connectionString);
    });
}

void AddServices()
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddScoped<IPriceRepository, PriceRepository>();
    builder.Services.AddScoped<ISeeder,Seeder>();
    builder.Services.AddScoped<IEmailService, EmailService>();
    builder.Services.AddScoped<AuthSeeder>();
    builder.Services.AddScoped<ITokenService, TokenService>();
    builder.Services.AddScoped<IAuthService,AuthService>();


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

void AddIdentity()
    {
        builder.Services
            .AddIdentityCore<Admin>(options =>
            {
                options.SignIn.RequireConfirmedAccount = false;
                options.User.RequireUniqueEmail = true;
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
            })
            .AddRoles<IdentityRole>()
            .AddEntityFrameworkStores<DataContext>();

    }

    void AddAuthentication()
    {
        builder.Services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddCookie(options => { options.Cookie.Name = "Authorization"; })
            .AddJwtBearer(options =>
            {
                var jwtSettings = builder.Configuration.GetSection("JWTSettings").Get<JWTSettings>();
                var issuerSigningKey = builder.Configuration.GetSection("IssuerSigningKey").Value;
                if (issuerSigningKey != null)
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ClockSkew = TimeSpan.Zero,
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = jwtSettings?.ValidIssuer,
                        ValidAudience = jwtSettings?.ValidAudience,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(issuerSigningKey)),
                    };
                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        if (context.Request.Cookies.ContainsKey("Authorization"))
                        {
                            context.Token = context.Request.Cookies["Authorization"];
                        }

                        return Task.CompletedTask;
                    }
                };
            });
    }
