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

  form: FormGroup;

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private _formService: FormService) {
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
    console.log(this._user);
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
}
