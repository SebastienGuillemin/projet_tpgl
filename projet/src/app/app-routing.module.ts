import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerealesComponent } from './cereales/cereales.component';
import { ConnectionComponent } from './connection/connection.component';
import { EtatMaterielComponent } from './etat-materiel/etat-materiel.component';
import { FournirDonneesComponent } from './fournir-donnees/fournir-donnees.component';

const routes: Routes = [
  {path: '', component: ConnectionComponent},
  {path: 'connection', component: ConnectionComponent},
  {path: 'cereales', component: CerealesComponent},
  {path: 'etat-materiel', component: EtatMaterielComponent},
  {path: 'fournir-donnees', component: FournirDonneesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
