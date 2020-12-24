import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Materiel } from '../model/materiel.model';

@Injectable({
    providedIn: 'root'
})


// Permet de récupérer les données sur les céréales stockées dans la bd et d'envoyer de nouvelles données.
export class MaterielService {
    public static GetApiUrl = 'api/getMateriels';
    public static UpdateApiUrl = 'api/updateMateriels';
    public static etatMaterialUrl = '/etat-materiel';

    // public static PostApiUrl: string = "api/postCereales";

    constructor(private _httpClient: HttpClient, private _router: Router) { }

    // Retourne un Observable contenant la réponse HTTP. Le composant s'occupe lui même de la gestion de la réponse.
    getMateriels(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Access-Control-Allow-Origin');

        return this._httpClient.get(MaterielService.GetApiUrl, {
            headers: headers,
            observe: 'response',
            withCredentials: true,
            responseType: 'json'
        });
    }


    updateData(materiel: Materiel): string[] {
        let errors = new Array<string>();
        const headers = new HttpHeaders()
            .set('Authorization', 'Access-Control-Allow-Origin')
            .set('Content-Type', 'application/json');

        this._httpClient.post(MaterielService.UpdateApiUrl, JSON.stringify(materiel), {
            headers: headers,
            observe: 'response',
            withCredentials: true // Permet d'envoyer le cookie de session.
        }).subscribe(           // Listener sur la réponse envoyé par le serveur.
            res => {
                //this._router.navigate([MaterielService.etatMaterialUrl]); //Vraiment util ? Si on veut mettre à jour plusieurs matériels c'est chiant
            },
            (err: HttpErrorResponse) => {
                errors.push('Code d\'erreur : ' + err.status + '.\nUne erreur est survenue, merci de réessayer plus tard.');
            }
        );

        return errors;
    }

}
