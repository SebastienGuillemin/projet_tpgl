import { Component, OnInit } from '@angular/core';
import { CerealesService } from '../shared/services/cereales.service';
import { Cereale } from '../shared/model/cereale.model';
import { ConnectionService } from '../shared/services/connection.service';
import { Router } from '@angular/router';
import { UserRole } from '../shared/model/user.model';

@Component({
  selector: 'app-cereales',
  templateUrl: './cereales.component.html',
  styleUrls: ['./cereales.component.css']
})
export class CerealesComponent implements OnInit {
  public cereales = [];

  constructor(private _cerealesService: CerealesService, private _connectionService: ConnectionService, private _router: Router) { }

  ngOnInit(): void {
    this._connectionService.redirectIfNotAuthorized([UserRole.User, UserRole.Admin], () => this._router.navigate(['connection']));  
    //Ici, on récupère un obeservable qui contiendra la réponse de la requête http (voir code du service).
    //Cela permet "d'attendre" la réponse du serveur et faire quelque chose une fois que les données sont reçues.
    this._cerealesService.getCereales()
        .subscribe(
          res => {
            for(let i = 0; i < res.body.length; i++) {    //on parcourt la liste des objets retournées par le serveur et on les utilise pour créer un nouveau lot de céréales.
              this.cereales.push(Object.assign(new Cereale, res.body[i]));
            }
        });
  }
  getTitle(): string {
    return "Voir les lots de céréales";
  }
}
