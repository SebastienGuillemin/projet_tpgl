import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { FormGroup } from '@angular/forms';
import { Materiel } from 'src/app/shared/model/materiel.model';

@Component({
  selector: 'app-fournir-donnees-materiel',
  templateUrl: './fournir-donnees-materiel.component.html',
  styleUrls: ['./fournir-donnees-materiel.component.css']
})
export class FournirDonneesMaterielComponent implements OnInit {
  private _materiel: Materiel;
  


  form: FormGroup;

  noms = [
    "Alarme",
    "Boisseau",
    "ElevateurGodet",
    "Fosse",
    "Pont Bascule",
    "Silo",
    "Sonde",
    "Systeme ventilation",
    "Tour de manutention" 
  ];

  constructor(private _formService: FormService) { }

  ngOnInit(): void {
    this._materiel = new Materiel();
    this._formService.setModel(this._materiel);
    this.form = this._formService.getForm();
  }

  onSubmit(): void {
    this._formService.hydrate();
    this._materiel = this._formService.getModel() as Materiel;
    this.ngOnInit(); 
  }
}
