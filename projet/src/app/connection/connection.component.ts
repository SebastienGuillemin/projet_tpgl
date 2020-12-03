import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { User } from '../shared/model/user.model';
import { FormService } from '../shared/services/form.service';

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

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private _formService: FormService, private _httpClient: HttpClient) {
    this._showPassword = false;
    this._user = new User();
    this._formService.setModel(this._user);
  }

  ngOnInit(): void {
    this.form = this._formService.getForm();
  }

  onSubmit(): void {
    this._formService.hydrate();
    this._user = this._formService.getModel();
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

    this._httpClient.post(this._apiUrl, JSON.stringify(this._user), {headers: headers, observe: 'response'})
      .subscribe(
        res => {
          if (res.ok) {
            alert("Connecté.");

            // le server express envoie l'url redirect vers page admin ou user
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status == 401) {
            alert("Nom d'utilisateur ou mot de passe invalide.");
          }
        }
      );
  }
}
