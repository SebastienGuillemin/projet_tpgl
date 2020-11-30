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

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HeaderComponent,
    EtatMaterielComponent,
    CerealesComponent,
    FournirDonneesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
