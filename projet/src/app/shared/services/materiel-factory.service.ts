import { Injectable } from '@angular/core';
import { Materiel } from '../model/materiel.model';
import { Alarme } from '../model/materiels/alarme.model';
import { Boisseau } from '../model/materiels/boisseau.model';
import { Cellule } from '../model/materiels/cellule.model';
import { ElevateurGodet } from '../model/materiels/elevateur-godet.model';
import { Fosse } from '../model/materiels/fosse.model';
import { PontBascule } from '../model/materiels/pont-bascule.model';
import { Silo } from '../model/materiels/silo.model';
import { Sonde } from '../model/materiels/sonde.model';
import { TourManutention } from '../model/materiels/tour-manutention.model';
import { Ventillation } from '../model/materiels/ventillation.model';

@Injectable({
  providedIn: 'root'
})
export class MaterielFactoryService {
  constructor() { }

  createMateriel(type: string, nom: string, etat: string): Materiel {
    switch (type) {
      case "Silo" : return new Silo(nom, etat);
      case "Cellule" : return new Cellule(nom, etat);
      case "TourManutention" : return new TourManutention(nom, etat);
      case "Boisseau" : return new Boisseau(nom, etat);
      case "Fosse" : return new Fosse(nom, etat);
      case "Ventillation" : return new Ventillation(nom, etat);
      case "Alarme" : return new Alarme(nom, etat);
      case "ElevateurGodet" : return new ElevateurGodet(nom, etat);
      case "PontBascule" : return new PontBascule(nom, etat);
      case "Sonde" : return new Sonde(nom, etat);
    }
  }
}
