import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plage } from '../Models/plage.model';

@Injectable({
  providedIn: 'root'
})
export class PlageService {
  private apiUrl = 'http://localhost:8080/plages'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<Plage[]> {
    return this.http.get<Plage[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<Plage> {
    return this.http.get<Plage>(`${this.apiUrl}/get/${id}`);
  }

  createParasole(plage: Plage): Observable<Plage> {
    return this.http.post<Plage>(`${this.apiUrl}/add`, plage);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
