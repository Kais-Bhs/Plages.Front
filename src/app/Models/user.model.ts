import { Concession } from "./Concession";
import { Pays } from "./pays.model";
import { Reservation } from "./reservation.model";
import { Role } from "./role.model";

export class User {
  username: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  creationDate: Date | undefined;
  token: string | undefined;
  pays?: Pays ;
  reservations: Reservation[] | undefined;
  adresseDeFacturation: string;
  historiqueDeTransaction: string | undefined;
  concession: Concession | undefined;
  phone: number;
  tokenCreationDate: Date | undefined;
  roles: Role[] | undefined;

  constructor(
    username: string,
    email: string,
    password: string,
    nom?: string,
    prenom?: string,
    adresseDeFacturation?: string,
    phone?: number,
    pays?: Pays
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.nom = nom || '';
    this.prenom = prenom || '';
    this.adresseDeFacturation = adresseDeFacturation || '';
    this.phone = phone || 0;
    this.pays =pays
  }
}
