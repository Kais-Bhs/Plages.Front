import { User } from './user.model';
import { Plage } from './plage.model';

export class Concessionnaire extends User {
  phone: number;
  plage: Plage;

  constructor(id: number, nom: string, prenom: string, email: string, password: string, phone: number, plage: Plage) {
    super(id, nom, prenom, email, password);
    this.phone = phone;
    this.plage = plage;
  }
}