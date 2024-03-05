import { Reservation } from './reservation.model';
import { Parasole } from './parasole.model';

export class ReservationParasole {
  id: number;
  nbLit: number;
  nbFauteuil: number;
  reservation: Reservation;
  parasole: Parasole;

  constructor(id: number, nbLit: number, nbFauteuil: number, reservation: Reservation, parasole: Parasole) {
    this.id = id;
    this.nbLit = nbLit;
    this.nbFauteuil = nbFauteuil;
    this.reservation = reservation;
    this.parasole = parasole;
  }
}