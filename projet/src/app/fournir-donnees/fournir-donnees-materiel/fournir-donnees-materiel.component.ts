import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { MaterielService } from 'src/app/shared/services/materiel.service';
import { FormGroup } from '@angular/forms';
import { Materiel } from 'src/app/shared/model/materiel.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MaterielFactoryService } from 'src/app/shared/services/materiel-factory.service';

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
    materiels: Materiel[];
    noms: string[];
    listEtats: string[];

    constructor(private _materielService: MaterielService, private _materielFactory: MaterielFactoryService) {
        this._formService = new FormService();
        //Comme les noms ne changent jamais, il faut juste les récupérer une seule fois.
        this.materiels = [];
        this.noms = [];
        this.listEtats = [];
        this._getNomMateriels();
    }

    private _getNomMateriels(): void {
        this._materielService.getMateriels().subscribe(
            res => {
                res.body.forEach(element => {
                    this.materiels.push(this._materielFactory.createMateriel(element.type, element.nom, element.etat));
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

    onChange(value: string): void {
        let index = parseInt(value.replace(" ", "").split(":")[0]);   //ngValue a une valeur de la force : index : valeur
        this.listEtats = this.materiels[index].getEtats();
    }

    onSubmit(): void {
        this._formService.hydrate();
        this._materiel = this._formService.getModel() as Materiel;
        console.log(this._materiel);
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
