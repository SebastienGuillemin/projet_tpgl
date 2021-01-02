import { Injectable } from '@angular/core';
import { User, UserRole } from '../model/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    public static userConnected: boolean = false;
    public static ApiUrl: string = "api/connection";
    public static ApiUrlLogout: string = "api/deconnection";
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
                user = res.body as User;
                onSuccess();
            },
            (err: HttpErrorResponse) => {
                //Utilisateur non connecté, ne rien faire.
            }
        );
    }

    redirectIfNotAuthorized(requiredAccess: UserRole[], onNotAuthorized: Function): void {
        let user: User = null;
        const headers = new HttpHeaders()
            .set('Authorization', 'Access-Control-Allow-Origin');

        this._httpClient.get(ConnectionService.ApiUrl, {
            headers: headers,
            observe: 'response',
            withCredentials: true
        }).subscribe(
            res => {
                user = res.body as User;
                if (!requiredAccess.includes(user.role)) {
                    onNotAuthorized();
                }
            },
            (err: HttpErrorResponse) => {
                onNotAuthorized();
            }
        );
    }

    postData(user: User): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Access-Control-Allow-Origin')
            .set('Content-Type', 'application/json');

        return this._httpClient.post(ConnectionService.ApiUrl, JSON.stringify(user), {
            headers: headers,
            observe: 'response',
            withCredentials: true //Permet d'envoyer le cookie de session.
        });
    }

    getUser(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Access-Control-Allow-Origin');

        return this._httpClient.get(ConnectionService.ApiUrl, {
            headers: headers,
            observe: 'response',
            withCredentials: true
        });
    }

    logout(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Access-Control-Allow-Origin');

        return this._httpClient.get(ConnectionService.ApiUrlLogout, {
            headers: headers,
            observe: 'response',
            withCredentials: true
        });
    }
}
