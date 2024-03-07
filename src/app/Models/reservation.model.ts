import { Client } from './client.model';

import { Equipement } from './equipement.model';
import { Facture } from './facture.model';
import { Parasole } from './parasole.model';
import { ReservationParasole } from './reservation-parasole.model';
import { Statut } from './statut';
import { TypeEquipement } from './type-equipement';
import { User } from './user.model';

export class Reservation {
  id?: number;
  dateDebut?: string ;
  dateFin?: string ;
  parasole?: Parasole ;
  remarque?: string;
  equipements: TypeEquipement | undefined;
  user: User | undefined;
  statut: Statut | undefined;
  facture?: Facture;

  constructor(
    id?: number,
    dateDebut?: string,
    dateFin?: string,
    parasole?: Parasole,
    remarque?: string,
    equipements?: TypeEquipement,
    client?: User,
    statut?: Statut,
    facture?: Facture
  ) {
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.parasole = parasole;
    this.remarque = remarque;
    this.equipements = equipements;
    this.user = client;
    this.statut = statut;
    this.facture = facture;
  }
}


