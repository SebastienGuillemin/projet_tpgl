import { Component, OnInit } from '@angular/core';
import {FormService} from '../shared/services/form.service';
import {ConnectionService} from '../shared/services/connection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {



  constructor(private _connectionService: ConnectionService) { }

   ngOnInit(): void {
     this._connectionService.logout().subscribe(
      res => {

      }
    );
  }

  getTitle(): string {
    return 'Déconnexion';
  }
}
