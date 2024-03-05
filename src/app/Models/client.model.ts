import { User } from './user.model';
import { LienParente } from './lien-parente.model';
import { Pays } from './pays.model';
import { Reservation } from './reservation.model';

export class Client extends User {
  adresseDeFacturation: string;
  historiqueDeTransaction: string;
  lienParente: LienParente;
  pays: Pays;
  reservations: Reservation[];

  constructor(
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string,
    adresseDeFacturation: string,
    historiqueDeTransaction: string,
    lienParente: LienParente,
    pays: Pays,
    reservations: Reservation[]
  ) {
    super(id, nom, prenom, email, password);
    this.adresseDeFacturation = adresseDeFacturation;
    this.historiqueDeTransaction = historiqueDeTransaction;
    this.lienParente = lienParente;
    this.pays = pays;
    this.reservations = reservations;
  }
}