import { Reservation } from './reservation.model';

export class Facture {

  id: number | undefined;
  numFacture: number | undefined;
  nom: string | undefined;
  prenom: string | undefined;
  numSiret: number | undefined;
  montant: number | undefined;
  reservation: Reservation | undefined;

}