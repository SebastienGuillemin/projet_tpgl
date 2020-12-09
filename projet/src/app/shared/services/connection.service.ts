import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private _apiUrl: string = "api/connection";

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  //Retourne l'utilisateur ou null (si non connecté).
  getUser(): User {
    let user: User = null;
    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin');

    this._httpClient.get(this._apiUrl,
      { headers: headers, observe: 'response', withCredentials: true})
      .subscribe(
        res => {
          user =  res.body as User;
        }
      )
      console.log(user);
      return user;
  }

  postData(user: User): String[] {
    let errors: String[];

    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin')
          .set('Content-Type', 'application/json');

    this._httpClient.post(this._apiUrl, JSON.stringify(user), {
        headers: headers,
        observe: 'response',
        withCredentials: true //Permet d'envoyer le cookie de session.
      }).subscribe(           //Listener sur la réponse envoyé par le serveur.
        res => {
          this._router.navigate(["/"]);
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
