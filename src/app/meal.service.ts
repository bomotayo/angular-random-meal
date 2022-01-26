import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface MealsResponse {
  meals: [];
}
@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getMeal() {
    return this.http
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .pipe(pluck('meals'));
  }
}
