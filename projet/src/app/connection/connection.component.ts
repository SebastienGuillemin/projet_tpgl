import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
}) 
export class ConnectionComponent {
  private _showPassword: boolean;
  profileForm: FormGroup;

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {
    this._showPassword = false;
    this.profileForm = this._formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  getForm(): FormGroup {
    return this.profileForm;
  }

  onSubmit(): void {
    alert("Submit");
  }

  getTitle(): string {
    return "Connexion";
  }

  togglePassword(){
    if(!this._showPassword) {
      $("#password").prop("type", "text");
      this._showPassword = true;
    }
    else {
      $("#password").prop("type", "password");
      this._showPassword = false;
    }
  }
}
