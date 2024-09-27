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
    public DbSet<Partner> Partners { get; set; }
    public DbSet<Gallery> Galleries { get; set; }
    public DbSet<ImageEntity> Images { get; set; }
    
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Blogpost>().HasIndex(post => post.Title).IsUnique();
        builder.Entity<Pricelist>().HasIndex(list => list.Job).IsUnique();
        builder.Entity<Admin>().HasIndex(admin => admin.Email).IsUnique();
        builder.Entity<Review>().HasIndex(review => new { review.Name, review.Email }).IsUnique();
        builder.Entity<Partner>().HasIndex(partner => partner.Name).IsUnique();
        builder.Entity<Gallery>().HasIndex(gallery => gallery.Name).IsUnique();
        builder.Entity<ImageEntity>().HasIndex(image => image.FilePath).IsUnique();
        
        builder.Entity<Gallery>()
            .HasMany(gallery => gallery.Images)
            .WithOne(image => image.Gallery)
            .HasForeignKey(image => image.GalleryId)
            .OnDelete(DeleteBehavior.Cascade);


        base.OnModelCreating(builder);
    }
}