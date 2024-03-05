import { Parasole } from './parasole.model';
import { Plage } from './plage.model';

export class File {
  id: number;
  numero: number;
  prixJournalier: number;
  parasoles: Parasole[];
  plage: Plage;

  constructor(id: number, numero: number, prixJournalier: number, parasoles: Parasole[], plage: Plage) {
    this.id = id;
    this.numero = numero;
    this.prixJournalier = prixJournalier;
    this.parasoles = parasoles;
    this.plage = plage;
  }
}