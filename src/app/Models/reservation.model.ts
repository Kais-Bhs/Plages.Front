import { Client } from './client.model';
import { Facture } from './facture.model';
import { ReservationParasole } from './reservation-parasole.model';
import { Statut } from './statut';

export class Reservation {
  id: number;
  dateDebut: string; // Assuming you handle dates as strings
  dateFin: string; // Assuming you handle dates as strings
  montantARegler: number;
  remarque: string;
  client: Client;
  statut: Statut;
  facture: Facture;
  reservationParasoles: ReservationParasole[];

  constructor(id: number, dateDebut: string, dateFin: string, montantARegler: number, remarque: string, client: Client, statut: Statut, facture: Facture, reservationParasoles: ReservationParasole[]) {
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.montantARegler = montantARegler;
    this.remarque = remarque;
    this.client = client;
    this.statut = statut;
    this.facture = facture;
    this.reservationParasoles = reservationParasoles;
  }
}
