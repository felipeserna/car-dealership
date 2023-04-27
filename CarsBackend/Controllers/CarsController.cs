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

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetCar([FromRoute] Guid id)
        {
            var car = await _carsBackendDBContext.Cars.FirstOrDefaultAsync(x => x.Id == id);

            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> ExchangeCar([FromRoute] Guid id, Car exchangeCarRequest)
        {
            var car = await _carsBackendDBContext.Cars.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            car.Brand= exchangeCarRequest.Brand;
            car.Model= exchangeCarRequest.Model;
            car.Year= exchangeCarRequest.Year;
            car.IsNew= exchangeCarRequest.IsNew;
            car.Price= exchangeCarRequest.Price;

            await _carsBackendDBContext.SaveChangesAsync();

            return Ok(car);
        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> SellCar([FromRoute] Guid id)
        {
            var car = await _carsBackendDBContext.Cars.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            _carsBackendDBContext.Cars.Remove(car);

            await _carsBackendDBContext.SaveChangesAsync();

            return Ok(car);
        }
        
    }
}
