import { Reservation } from './reservation.model';

export class Facture {
  id: number;
  numFacture: number;
  nom: string;
  prenom: string;
  numSiret: number;
  montant: number;
  reservation: Reservation;

  constructor(id: number, numFacture: number, nom: string, prenom: string, numSiret: number, montant: number, reservation: Reservation) {
    this.id = id;
    this.numFacture = numFacture;
    this.nom = nom;
    this.prenom = prenom;
    this.numSiret = numSiret;
    this.montant = montant;
    this.reservation = reservation;
  }
}