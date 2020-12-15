import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { Cereale } from 'src/app/shared/model/cereale.model';
import { FormGroup } from '@angular/forms';
import { CerealesService } from 'src/app/shared/services/cereales.service';

@Component({
  selector: 'app-fournir-donnees-cereales',
  templateUrl: './fournir-donnees-cereales.component.html',
  styleUrls: ['./fournir-donnees-cereales.component.css']
})
export class FournirDonneesCerealesComponent implements OnInit {
  private _cereale: Cereale;

  form: FormGroup;
  errors: String[];

  qualites = [
    "Mauvaise",
    "Bonne",
    "Très bonne"
  ];

  constructor(private _formService: FormService, private _cerealesService: CerealesService) {
    this._cereale = new Cereale();  //création d'un nouveau lot de céréale vide.
    this._formService.setModel(this._cereale);    //passage de ce lot au service de formulaire.
  }

  ngOnInit(): void { 
    this.form  = this._formService.getForm(); //récupération du formulaire.
  }

  onSubmit(): void {
    this._formService.hydrate();
    this._cereale = this._formService.getModel() as Cereale;
    let errors = this._cerealesService.postData(this._cereale);
  }
}
