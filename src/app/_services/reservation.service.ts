import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../Models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/reservations'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/get/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/add/`, reservation);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getReservationByClient(clientId : number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getbyclient/${clientId}`);
  }
}
