using CarpenterServer.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

AddDbContext();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.Run();

void AddDbContext()
{
    builder.Services.AddDbContext<DataContext>(options =>
    {
        options.UseSqlServer(
            "Server=localhost,1433;Database=CarpenterSite;User Id=sa;Password=Zakuro19920120;Encrypt=false;");
    });
}