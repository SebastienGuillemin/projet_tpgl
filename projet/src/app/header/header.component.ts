import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../shared/services/connection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userConnected: boolean;

  constructor(private _connectionService: ConnectionService) {
    this.userConnected = false;
  }

  ngOnInit(): void {
    //La réponse du serveur est soit le code 200 avec les infos de l'utilisateur,
    //Soit le code 401 si utilisateur non connecté (ou un autre code si erreur interne).
    this._connectionService.getUser().subscribe(
      res => {
        //Si code 200 -> utilisateur connecté.
        if (res.status == 200) this.userConnected = true;
      },
      (err: HttpErrorResponse) => {
        if(err.status == 401) this.userConnected = false;
      }
    );
  }
}
