namespace CarsBackend.Models
{
    public class Car
    {
        public Guid Id { get; set; }
        
        public string Brand { get; set; }

        public string Model { get; set; }

        public int Year { get; set; }

        public string IsNew { get; set; }

        public int Price { get; set; }
    }
}
