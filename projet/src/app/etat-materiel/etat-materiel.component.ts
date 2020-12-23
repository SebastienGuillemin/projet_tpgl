import { Component, OnInit } from '@angular/core';
import { Materiel } from '../shared/model/materiel.model';
import { MaterielService } from '../shared/services/materiel.service'
;
@Component({
  selector: 'app-etat-materiel',
  templateUrl: './etat-materiel.component.html',
  styleUrls: ['./etat-materiel.component.css']
})
export class EtatMaterielComponent implements OnInit{

  public materiels = [];
  
  constructor(private _materielService: MaterielService) { }

  getTitle(): string {
    return "Voir état du matériel";
  }

  ngOnInit(): void {
    //Ici, on récupère un obeservable qui contiendra la réponse de la requête http (voir code du service).
    //Cela permet "d'attendre" la réponse du serveur et faire quelque chose une fois que les données sont reçues.
    this._materielService.getMateriels()
        .subscribe(
          res => {
            for(let i = 0; i < res.body.length; i++) {    //on parcourt la liste des objets retournées par le serveur et on les utilise pour créer un nouveau lot de céréales.
              this.materiels.push(Object.assign(new Materiel, res.body[i]));
            }
        });
  }

}
