import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { MaterielService } from 'src/app/shared/services/materiel.service';
import { FormGroup } from '@angular/forms';
import { Materiel } from 'src/app/shared/model/materiel.model';

@Component({
    selector: 'app-fournir-donnees-materiel',
    templateUrl: './fournir-donnees-materiel.component.html',
    styleUrls: ['./fournir-donnees-materiel.component.css']
})
export class FournirDonneesMaterielComponent implements OnInit {
    private _materiel: Materiel;
    //Voir le composant FournirDonneesCerealesComponent.
    private _formService: FormService;

    errors: String[];
    form: FormGroup;
    noms = [
        'Alarme',
        'Boisseau',
        'ElevateurGodet',
        'Fosse',
        'Pont Bascule',
        'Silo',
        'Sonde',
        'Systeme ventilation',
        'Tour de manutention'
    ];

    constructor(private _materielService: MaterielService) {
        this._formService = new FormService();
    }

    ngOnInit(): void {
        this._materiel = new Materiel();
        this._formService.setModel(this._materiel);
        this.form = this._formService.getForm();
    }

    onSubmit(): void {
        this._formService.hydrate();
        this._materiel = this._formService.getModel() as Materiel;
        let errors = this._materielService.updateData(this._materiel);
        if (errors.length > 0) {
            this.errors = errors;
        }
        else {
            this.ngOnInit();
        }

    }
}
