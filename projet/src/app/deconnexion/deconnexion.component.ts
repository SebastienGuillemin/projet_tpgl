import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/services/form.service';
import { ConnectionService } from '../shared/services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private _connectionService: ConnectionService, private _router: Router) { }

  ngOnInit(): void {
    this._connectionService.logout().subscribe(
      res => {
        this._connectionService["userConnected"] = false;
      }
    );
  }

  getConnectionService(): ConnectionService {
    return this._connectionService;
  }

  getTitle(): string {
    return 'Déconnexion';
  }
}
