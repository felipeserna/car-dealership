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
}
