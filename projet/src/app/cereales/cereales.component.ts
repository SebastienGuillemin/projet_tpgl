import { Component, OnInit } from '@angular/core';
import { CerealesService } from '../shared/services/cereales.service';
import { Cereale } from '../shared/model/cereale.model';

@Component({
  selector: 'app-cereales',
  templateUrl: './cereales.component.html',
  styleUrls: ['./cereales.component.css']
})
export class CerealesComponent {
  public cereales: Cereale[];

  constructor(private _crerealesService: CerealesService) {
    this.cereales = this._crerealesService.getCereales();
    console.log(this.cereales);
  }

  getTitle(): string {
    return "Voir les lots de céréales";
  }
}
