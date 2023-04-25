import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/car.model';

@Component({
  selector: 'pm-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: ICar[] = [
    {
      id: 'bb31a38a-742b-4db1-a4dd-fded5b97f499',
      brand: 'Nissan',
      model: 'Tiida',
      year: 2012,
      isNew: false,
      price: 5000
    },
    {
      id: 'ffeafcf2-4b72-4337-b0f9-269bc760a2b0',
      brand: 'Honda',
      model: 'Civic',
      year: 2023,
      isNew: true,
      price: 20000
    },
    {
      id: 'ffeafcf2-4b72-4337-b0f9-269bc760a2b2',
      brand: 'Renault',
      model: 'Logan',
      year: 2023,
      isNew: true,
      price: 25000
    }
  ];
  constructor() {}

  ngOnInit(): void {
    
  }

}
