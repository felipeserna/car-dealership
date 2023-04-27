import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseApiUrl: string = 'https://localhost:7033';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(this.baseApiUrl + '/api/cars');
  }

  buyCar(buyCarRequest: ICar): Observable<ICar> {
    buyCarRequest.id = '00000000-0000-0000-0000-000000000000';
    buyCarRequest.isNew = true;
    return this.http.post<ICar>(this.baseApiUrl + '/api/cars', buyCarRequest);
  }

  getCar(id: string): Observable<ICar> {
    return this.http.get<ICar>(this.baseApiUrl + '/api/cars/' + id);
  }

  exchangeCar(id: string, exchangeCarRequest: ICar): Observable<ICar> {
    return this.http.put<ICar>(this.baseApiUrl + '/api/cars/' + id, exchangeCarRequest);
  }

  sellCar(id: string): Observable<ICar> {
    return this.http.delete<ICar>(this.baseApiUrl + '/api/cars/' + id);
  }
}
