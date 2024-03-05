import { File } from './file.model';
import { Concessionnaire } from './concessionnaire.model';

export class Plage {
  id: number;
  name: string;
  localisation: string;
  files: File[];
  concessionnaire: Concessionnaire;

  constructor(id: number, name: string, localisation: string, files: File[], concessionnaire: Concessionnaire) {
    this.id = id;
    this.name = name;
    this.localisation = localisation;
    this.files = files;
    this.concessionnaire = concessionnaire;
  }
}