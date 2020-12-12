import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Permet de récupérer les données sur les céréales stockées dans la bd et d'envoyer de nouvelles données.
export class CerealesService {
  constructor(private _httpClient: HttpClient) { }

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
}
