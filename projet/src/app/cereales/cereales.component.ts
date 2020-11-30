import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cereales',
  templateUrl: './cereales.component.html',
  styleUrls: ['./cereales.component.css']
})
export class CerealesComponent {
  constructor() { }

  getTitle(): string {
    return "Voir les lot de céréales";
  }

}
