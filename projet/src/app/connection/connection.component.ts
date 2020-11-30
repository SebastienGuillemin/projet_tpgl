import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
import { ReactiveFormsModule , FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
}) 
export class ConnectionComponent implements OnInit {
  title: string = "Connexion";
  profileForm: FormGroup;

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {
    this.profileForm = this._formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.titleEmitter.emit(this.title);
  }

  getForm(): FormGroup {
    return this.profileForm;
  }

  onSubmit(): void {
    alert("Submit");
  }
}
