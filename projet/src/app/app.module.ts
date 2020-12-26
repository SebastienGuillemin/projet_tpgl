import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { HeaderComponent } from './header/header.component';
import { EtatMaterielComponent } from './etat-materiel/etat-materiel.component';
import { CerealesComponent } from './cereales/cereales.component';
import { FournirDonneesComponent } from './fournir-donnees/fournir-donnees.component';
import { HttpClientModule } from '@angular/common/http';
import { FournirDonneesCerealesComponent } from './fournir-donnees/fournir-donnees-cereales/fournir-donnees-cereales.component';
import { FournirDonneesMaterielComponent } from './fournir-donnees/fournir-donnees-materiel/fournir-donnees-materiel.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HeaderComponent,
    EtatMaterielComponent,
    CerealesComponent,
    FournirDonneesComponent,
    FournirDonneesCerealesComponent,
    FournirDonneesMaterielComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
