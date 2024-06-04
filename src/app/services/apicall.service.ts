import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  constructor(private http: HttpClient) {}

  getRandomMeal(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
