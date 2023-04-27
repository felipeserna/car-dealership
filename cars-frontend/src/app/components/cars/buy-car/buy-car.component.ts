import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'pm-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})
export class BuyCarComponent implements OnInit {

  buyCarRequest: ICar = {
    id: '',
    brand: '',
    model: '',
    year: 0,
    isNew: false,
    price: 0
  }

  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit(): void {
    
  }

  buyCar() {
    this.carsService.buyCar(this.buyCarRequest)
    .subscribe({
      next: (car) => {
        this.router.navigate(['cars']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
