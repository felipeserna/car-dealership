import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'pm-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: ICar[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getAllCars()
    .subscribe({
      next: (cars) => {
        this.cars = cars;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
