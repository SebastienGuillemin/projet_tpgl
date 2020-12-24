import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { Cereale } from 'src/app/shared/model/cereale.model';
import { FormGroup } from '@angular/forms';
import { CerealesService } from 'src/app/shared/services/cereales.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-fournir-donnees-cereales',
    templateUrl: './fournir-donnees-cereales.component.html',
    styleUrls: ['./fournir-donnees-cereales.component.css']
})
export class FournirDonneesCerealesComponent implements OnInit {
    private _cereale: Cereale;
    //Il n'est pas possible d'injecter ce service dans le constructeur car il le faut aussi pour mettre à jour le matériel.
    //Or, si un service est injecté dans le constructeur, seul une instance est créée pour tous les composants actifs ce qui pose problème dans notre cas car deux composant l'utilisent.
    private _formService: FormService;

    form: FormGroup;
    errors: String[];

    qualites = [
        "Mauvaise",
        "Bonne",
        "Très bonne"
    ];

    constructor(private _cerealesService: CerealesService) { }

    ngOnInit(): void {
        //Les deux lignes suivantes se trouvent dans ngOnInit afin de pouvoir recharger le formulaire.
        this._cereale = new Cereale();                //création d'un nouveau lot de céréale vide.
        this._formService = new FormService();
        this.errors = [];   
        this._formService.setModel(this._cereale);    //passage de ce lot au service de formulaire.
        this.form = this._formService.getForm();     //récupération du formulaire.
    }

    onSubmit(): void {
        this._formService.hydrate();
        this._cereale = this._formService.getModel() as Cereale;
        this._cerealesService.postData(this._cereale).subscribe(           //Listener sur la réponse envoyé par le serveur.
            res => {
                //rien à faire.
            },
            (err: HttpErrorResponse) => {
                this.errors.push("Code d'erreur : " + err.status + ".\nUne erreur est survenue, merci de réessayer plus tard.");
            }
        );
        this.ngOnInit();  //rafraichissement du composant.
    }
}
