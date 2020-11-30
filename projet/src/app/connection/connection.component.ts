import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { SafeHtml } from '@angular/platform-browser';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
}) 
export class ConnectionComponent implements OnInit {
  title: string = "Connexion";
  connexionForm: SafeHtml;

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private _formService: FormService){
    this.connexionForm = this._formService.generateForm();
  }

  ngOnInit(): void {
    this.titleEmitter.emit(this.title);
  }
}
