import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { User } from '../shared/model/user.model';
import { FormService } from '../shared/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
}) 
export class ConnectionComponent implements OnInit {
  private _showPassword: boolean;
  private _user: User;
  private _apiUrl: string = "api/connection";

  form: FormGroup;
  errors: String[];

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private _formService: FormService, private _httpClient: HttpClient, private _router: Router) {
    this._showPassword = false;
    this._user = new User();
    this._formService.setModel(this._user);    
  }

  ngOnInit(): void {
    // if est connecté -> rediriger vers lots de céréales.
    this.form = this._formService.getForm();
    this.errors = [];
  }

  onSubmit(): void {
    this._formService.hydrate();
    this._user = this._formService.getModel();
    this.errors = [];
    this.postData();
  }

  togglePassword(): void{
    if(!this._showPassword) {
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

  private postData(): void {
    const headers = new HttpHeaders()
          .set('Authorization', 'Access-Control-Allow-Origin')
          .set('Content-Type', 'application/json');

    this._httpClient.post(this._apiUrl, JSON.stringify(this._user), {
        headers: headers,
        observe: 'response',
        withCredentials: true //Permet d'envoyer le cookie de session.
      }).subscribe(           //Listener sur la réponse envoyé par le serveur.
        res => {
          this._router.navigate(["/"]);
        },
        (err: HttpErrorResponse) => {
          if (err.status == 401) {
            this.errors.push("Connexion échouée, nom d'utilisateur ou mot de passe invalide.");
          }
        }
      );
  }
}
