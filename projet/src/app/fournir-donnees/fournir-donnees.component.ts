import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournir-donnees',
  templateUrl: './fournir-donnees.component.html',
  styleUrls: ['./fournir-donnees.component.css']
})
export class FournirDonneesComponent implements OnInit {
  title : string = "Fournir les données" ;
  constructor() { }

  ngOnInit(): void {
  }

}
