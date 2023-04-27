import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BuyCarComponent } from './components/cars/buy-car/buy-car.component';
import { FormsModule } from '@angular/forms';
import { ExchangeCarComponent } from './components/cars/exchange-car/exchange-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    BuyCarComponent,
    ExchangeCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
