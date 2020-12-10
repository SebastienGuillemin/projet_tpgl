import { Injectable } from '@angular/core';
import { Cereale } from '../model/cereale.model';

@Injectable({
  providedIn: 'root'
})
//Permet de récupérer les données sur les céréales stockées dans la bd et d'envoyer de nouvelles données.
export class CerealesService {

  constructor() { }

  getCereales(): Cereale[] {
    let cereales = new Array<Cereale>();
    cereales.push(new Cereale(1, "ok", 10, "super", ["paris", "lyon"]));
    return cereales;
  }
}
