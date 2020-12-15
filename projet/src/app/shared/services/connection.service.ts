import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  public static ApiUrl: string = "api/connection";
  public static UrlOnConnectionSuccess = "/cereales";

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  //Retourne l'utilisateur ou null (si non connecté).
  redirectIfConnected(onSuccess: Function): void {
    let user: User = null;
    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin');

    this._httpClient.get(ConnectionService.ApiUrl, {
        headers: headers,
        observe: 'response',
        withCredentials: true
      }).subscribe(
        res => {
          user =  res.body as User;          
          onSuccess();
        }
      )
  }

  postData(user: User): Array<String> {
    let errors = new Array<String>();

    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin')
          .set('Content-Type', 'application/json');

    this._httpClient.post(ConnectionService.ApiUrl, JSON.stringify(user), {
        headers: headers,
        observe: 'response',
        withCredentials: true //Permet d'envoyer le cookie de session.
      }).subscribe(           //Listener sur la réponse envoyé par le serveur.
        res => {
          this._router.navigate([ConnectionService.UrlOnConnectionSuccess]);
        },
        (err: HttpErrorResponse) => {
          if (err.status == 401) {
            errors.push("Connexion échouée, nom d'utilisateur ou mot de passe invalide.");
          }
        }
      );

      return errors;
  }
}
