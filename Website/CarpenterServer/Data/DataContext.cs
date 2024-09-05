using CarpenterServer.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CarpenterServer.Data;

public class DataContext : IdentityDbContext<Admin, IdentityRole, string>
{
    public DbSet<Blogpost> Blogposts { get; set; }
    public DbSet<Pricelist> Pricelists { get; set; }
    public DbSet<Review> Reviews { get; set; }
    
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Blogpost>().HasIndex(post => post.Title).IsUnique();
        builder.Entity<Pricelist>().HasIndex(list => list.Job).IsUnique();
        builder.Entity<Admin>().HasIndex(admin => admin.Email).IsUnique();
        builder.Entity<Review>().HasIndex(review => new { review.Name, review.Email }).IsUnique();


        base.OnModelCreating(builder);
    }
}