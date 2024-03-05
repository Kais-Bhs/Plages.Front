import { User } from './user.model';
import { LienParente } from './lien-parente.model';
import { Pays } from './pays.model';
import { Reservation } from './reservation.model';

export class Client extends User {
  adresseDeFacturation: string | undefined;
  historiqueDeTransaction: string | undefined;
  lienParente: LienParente | undefined;
  pays: Pays | undefined;
  reservations: Reservation[] | undefined;
}