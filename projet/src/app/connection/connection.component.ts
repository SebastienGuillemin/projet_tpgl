import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { User } from '../shared/model/user.model';
import { FormService } from '../shared/services/form.service';
import { Router } from '@angular/router';
import { ConnectionService } from '../shared/services/connection.service';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
    private _showPassword: boolean;
    private _user: User;

    form: FormGroup;
    errors: String[];

    @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

    constructor(private _formService: FormService, private _connectionService: ConnectionService, private _router: Router) {
        this._showPassword = false;
        this._user = new User();
        this._formService.setModel(this._user);
    }

    ngOnInit(): void {
        this._connectionService.redirectIfConnected(() => this._router.navigate([ConnectionService.UrlOnConnectionSuccess]));

        this.form = this._formService.getForm();
        this.errors = [];
    }

    onSubmit(): void {
        this._formService.hydrate();
        this._user = this._formService.getModel();
        this._connectionService.postData(this._user).subscribe(           //Listener sur la réponse envoyé par le serveur.
            res => {
                this._router.navigate([ConnectionService.UrlOnConnectionSuccess]);
            },
            (err: HttpErrorResponse) => {
                if (err.status == 401) {
                    this.errors.push("Connexion échouée, nom d'utilisateur ou mot de passe invalide.");
                }
                else {
                    this.errors.push("Code d'erreur : " + err.status + ".\nUne erreur est survenue, merci de réessayer plus tard.");
                }
            }
        );
    }

    togglePassword(): void {
        if (!this._showPassword) {
            $("#password").prop("type", "text");
            this._showPassword = true;
        }
        else {
            $("#password").prop("type", "password");
            this._showPassword = false;
        }
    }

    getTitle(): string {
        return "Connexion";
    }
}
