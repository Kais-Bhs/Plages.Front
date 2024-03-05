import { User } from './user.model';
import { Plage } from './plage.model';

export class Concessionnaire extends User {
  phone: number;
  plage: Plage;

  constructor(id: number, nom: string, prenom: string, email: string, password: string, phone: number, plage: Plage) {
    super();
    this.phone = phone;
    this.plage = plage;
  }
}