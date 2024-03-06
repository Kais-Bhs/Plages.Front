import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationParasole } from '../Models/reservation-parasole.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationParasoleService {
  private apiUrl = 'http://localhost:8080/reservationparasoles'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<ReservationParasole[]> {
    return this.http.get<ReservationParasole[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<ReservationParasole> {
    return this.http.get<ReservationParasole>(`${this.apiUrl}/get/${id}`);
  }

  createParasole(reservationParasole: ReservationParasole): Observable<ReservationParasole> {
    return this.http.post<ReservationParasole>(`${this.apiUrl}/add`, reservationParasole);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}