import { Parasole } from './parasole.model';
import { TypeEquipement } from './type-equipement';

export class Equipement {
  id: number;
  numEquipement: number;
  statutEquipement: string;
  typeEquipement: TypeEquipement;
  parasole: Parasole;

  constructor(id: number, numEquipement: number, statutEquipement: string, typeEquipement: TypeEquipement, parasole: Parasole) {
    this.id = id;
    this.numEquipement = numEquipement;
    this.statutEquipement = statutEquipement;
    this.typeEquipement = typeEquipement;
    this.parasole = parasole;
  }
}