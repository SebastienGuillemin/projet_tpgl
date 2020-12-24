import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { MaterielService } from 'src/app/shared/services/materiel.service';
import { FormGroup } from '@angular/forms';
import { Materiel } from 'src/app/shared/model/materiel.model';
import { HttpErrorResponse } from '@angular/common/http';

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
    noms: String[];

    constructor(private _materielService: MaterielService) {
        this._formService = new FormService();
        //Comme les noms ne changent jamais, il faut juste les récupérer une seule fois.
        this.noms = [];
        this._getNomMateriels();
    }

    private _getNomMateriels(): void {
        this._materielService.getMateriels().subscribe(
            res => {
                res.body.forEach(element => {
                    this.noms.push(element["nom"]);
                });
            }
        );
    }
    
    ngOnInit(): void {
        this._materiel = new Materiel();
        this._formService.setModel(this._materiel);
        this.errors = [];
        this.form = this._formService.getForm();
    }

    onSubmit(): void {
        this._formService.hydrate();
        this._materiel = this._formService.getModel() as Materiel;
        this._materielService.updateData(this._materiel).subscribe(           // Listener sur la réponse envoyé par le serveur.
            res => {
                //this._router.navigate([MaterielService.etatMaterialUrl]); //Vraiment util ? Si on veut mettre à jour plusieurs matériels c'est chiant
            },
            (err: HttpErrorResponse) => {
                this.errors.push('Code d\'erreur : ' + err.status + '.\nUne erreur est survenue, merci de réessayer plus tard.');
            }
        );
        this.ngOnInit();
    }
}
