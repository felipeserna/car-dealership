using CarsBackend.Data;
using CarsBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarsBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private readonly CarsBackendDBContext _carsBackendDBContext;
        public CarsController(CarsBackendDBContext carsBackendDBContext)
        {
            _carsBackendDBContext = carsBackendDBContext;

        }
        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var cars = await _carsBackendDBContext.Cars.ToListAsync();
            return Ok(cars);
        }

        [HttpPost]
        public async Task<IActionResult> BuyCar([FromBody] Car carRequest)
        {
            carRequest.Id = Guid.NewGuid();

            await _carsBackendDBContext.Cars.AddAsync(carRequest);
            await _carsBackendDBContext.SaveChangesAsync();

            return Ok(carRequest);
        }
    }
}
