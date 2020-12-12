import { Component, OnInit } from '@angular/core';
import { CerealesService } from '../shared/services/cereales.service';
import { Cereale } from '../shared/model/cereale.model';

@Component({
  selector: 'app-cereales',
  templateUrl: './cereales.component.html',
  styleUrls: ['./cereales.component.css']
})
export class CerealesComponent implements OnInit {
  public cereales = [];

  constructor(private _crerealesService: CerealesService) { }

  ngOnInit(): void {
    //Ici, on récupère un obeservable qui contiendra la réponse de la requête http (voir code du service).
    //Cela permet "d'attendre" la réponse du serveur et faire quelque chose une fois que les données sont reçues.
    this._crerealesService.getCereales()
        .subscribe(
          res => {
            this.cereales = res.body;
            console.log(this.cereales);
        });
  }

  getTitle(): string {
    return "Voir les lots de céréales";
  }
}
