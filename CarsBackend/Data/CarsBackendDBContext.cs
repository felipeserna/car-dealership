using CarsBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace CarsBackend.Data
{
    public class CarsBackendDBContext : DbContext
    {
        public CarsBackendDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
    }
}
