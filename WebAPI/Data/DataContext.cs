using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        public DbSet<City> Cities{get; set;}
        public DbSet<User> Users{get; set;}
    }
}