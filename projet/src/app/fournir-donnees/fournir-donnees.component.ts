import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../shared/model/user.model';
import { ConnectionService } from '../shared/services/connection.service';

@Component({
  selector: 'app-fournir-donnees',
  templateUrl: './fournir-donnees.component.html',
  styleUrls: ['./fournir-donnees.component.css']
})
export class FournirDonneesComponent {
  constructor(private _connectionService: ConnectionService, private _router: Router) { }

  getTitle(): string {
    return "Fournir les données";
  }

  ngOnInit(): void {
    const requiredAccess = UserRole.Admin;
    this._connectionService.redirectIfNotAuthorized(requiredAccess, () => this._router.navigate(['connection']));
  }
}
