import { Client } from './client.model';

export class LienParente {
  id: number;
  nom: string;
  reduction: number;
  client: Client;

  constructor(id: number, nom: string, reduction: number, client: Client) {
    this.id = id;
    this.nom = nom;
    this.reduction = reduction;
    this.client = client;
  }
}