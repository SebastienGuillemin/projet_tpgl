import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etat-materiel',
  templateUrl: './etat-materiel.component.html',
  styleUrls: ['./etat-materiel.component.css']
})
export class EtatMaterielComponent {
  constructor() { }

  getTitle(): string {
    return "Voir état du matériel";
  }
}
