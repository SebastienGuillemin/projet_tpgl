import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cereale } from '../model/cereale.model';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
//Permet de récupérer les données sur les céréales stockées dans la bd et d'envoyer de nouvelles données.
export class CerealesService {
  private _apiUrl: string = "api/postCereales";
  
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  //Retourne un Observable contenant la réponse HTTP. Le composant s'occupe lui même de la gestion de la réponse.
  getCereales(): Observable<any> {
    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin');

    return this._httpClient.get("api/getCereales", {
        headers: headers,
        observe: 'response',
        withCredentials: true,
        responseType: 'json'
      });
  }

  postData(cereale: Cereale): string[] {
    let errors = new Array<string>();

    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin')
          .set('Content-Type', 'application/json');

    this._httpClient.post(this._apiUrl, JSON.stringify(cereale), {
        headers: headers,
        observe: 'response',
        withCredentials: true //Permet d'envoyer le cookie de session.
      }).subscribe(           //Listener sur la réponse envoyé par le serveur.
        res => {
          //rien à faire.
        },
        (err: HttpErrorResponse) => {
          errors.push("Une erreur est survenue, merci de réessayer plus tard.");
        }
      );

      return errors;
  }
}
