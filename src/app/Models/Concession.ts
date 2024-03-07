import { User } from "./user.model";

export class Concession {
    name?: string;
    localisation?: string;
    files?: File[] | undefined;
    concessionnaire?: User | undefined;
  
    constructor(name?: string, localisation?: string) {
      this.name = name;
      this.localisation = localisation;
    }
  }