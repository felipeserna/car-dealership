import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { BuyCarComponent } from './components/cars/buy-car/buy-car.component';
import { ExchangeCarComponent } from './components/cars/exchange-car/exchange-car.component';

const routes: Routes = [
  {
    path: '',
    component: CarsListComponent
  },
  {
    path: 'cars',
    component: CarsListComponent
  },
  {
    path: 'cars/buy',
    component: BuyCarComponent
  },
  {
    path: 'cars/exchange/:id',
    component: ExchangeCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
