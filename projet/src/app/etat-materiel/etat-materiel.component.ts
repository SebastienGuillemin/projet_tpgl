import { Component, OnInit } from '@angular/core';
import { Materiel } from '../shared/model/materiel.model';
import { Alarme } from '../shared/model/materiels/alarme.model';
import { Boisseau } from '../shared/model/materiels/boisseau.model';
import { Cellule } from '../shared/model/materiels/cellule.model';
import { ElevateurGodet } from '../shared/model/materiels/elevateur-godet.model';
import { Fosse } from '../shared/model/materiels/fosse.model';
import { PontBascule } from '../shared/model/materiels/pont-bascule.model';
import { Silo } from '../shared/model/materiels/silo.model';
import { Sonde } from '../shared/model/materiels/sonde.model';
import { TourManutention } from '../shared/model/materiels/tour-manutention.model';
import { Ventillation } from '../shared/model/materiels/ventillation.model';
import { MaterielService } from '../shared/services/materiel.service';

@Component({
  selector: 'app-etat-materiel',
  templateUrl: './etat-materiel.component.html',
  styleUrls: ['./etat-materiel.component.css']
})
export class EtatMaterielComponent implements OnInit {

  public materiels: Materiel[];

  constructor(private _materielService: MaterielService) {
    this.materiels = [];
  }

  getTitle(): string {
    return "Voir état du matériel";
  }

  ngOnInit(): void {
    //Ici, on récupère un obeservable qui contiendra la réponse de la requête http (voir code du service).
    //Cela permet "d'attendre" la réponse du serveur et faire quelque chose une fois que les données sont reçues.
    this._materielService.getMateriels()
      .subscribe(
        res => {
          for (let i = 0; i < res.body.length; i++) {    //on parcourt la liste des objets retournées par le serveur et on les utilise pour créer un nouveau lot de céréales.
            // this.materiels.push(Object.assign(eval("new " + res.body[i].type + "()"), res.body[i]));
            console.log(eval("new " + res.body[i].type + "()"));
          }
        }
      );
  }
}
