import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'pm-exchange-car',
  templateUrl: './exchange-car.component.html',
  styleUrls: ['./exchange-car.component.css']
})
export class ExchangeCarComponent implements OnInit {

  carDetails: ICar = {
    id: '',
    brand: '',
    model: '',
    year: 0,
    isNew: 'Yes',
    price: 0
  };

  constructor(private route: ActivatedRoute, private carsService: CarsService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.carsService.getCar(id)
          .subscribe({
            next: (response) => {
              this.carDetails = response;
            }
          })
        }
      }
    })
  }

  exchangeCar() {
    this.carsService.exchangeCar(this.carDetails.id, this.carDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['cars']);
      }
    });
  }

  sellCar(id: string) {
    this.carsService.sellCar(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['cars']);
      }

    });
  }

}
