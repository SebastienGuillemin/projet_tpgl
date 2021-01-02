import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materiel } from '../shared/model/materiel.model';
import { UserRole } from '../shared/model/user.model';
import { ConnectionService } from '../shared/services/connection.service';
import { MaterielFactoryService } from '../shared/services/materiel-factory.service';
import { MaterielService } from '../shared/services/materiel.service';

@Component({
  selector: 'app-etat-materiel',
  templateUrl: './etat-materiel.component.html',
  styleUrls: ['./etat-materiel.component.css']
})
export class EtatMaterielComponent implements OnInit {

  public materiels: Materiel[];

  constructor(private _materielService: MaterielService, private _materielFactory: MaterielFactoryService, private _connectionService: ConnectionService, private _router: Router) {
    this.materiels = [];
  }

  getTitle(): string {
    return "Voir état du matériel";
  }

  ngOnInit(): void {
    this._connectionService.redirectIfNotAuthorized(UserRole.User, () => this._router.navigate(['connection']));
    //Ici, on récupère un obeservable qui contiendra la réponse de la requête http (voir code du service).
    //Cela permet "d'attendre" la réponse du serveur et faire quelque chose une fois que les données sont reçues.
    this._materielService.getMateriels()
      .subscribe(
        res => {
          for (let i = 0; i < res.body.length; i++) {    //on parcourt la liste des objets retournées par le serveur et on les utilise pour créer un nouveau lot de céréales.
            this.materiels.push(this._materielFactory.createMateriel(res.body[i].type, res.body[i].nom, res.body[i].etat));
          }
        }
      );
  }

  actionMateriel(index): void {
    this.materiels[index].action();
    this._materielService.updateData(this.materiels[index]).subscribe(           // Listener sur la réponse envoyé par le serveur.
      res => {
          //On ne fait rien.
      },
      (err: HttpErrorResponse) => {
          alert('Code d\'erreur : ' + err.status + '.\nUne erreur est survenue, merci de réessayer plus tard.');
      }
  );
  }
}
