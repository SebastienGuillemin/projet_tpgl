import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { MaterielService } from 'src/app/shared/services/materiel.service';

import { FournirDonneesMaterielComponent } from './fournir-donnees-materiel.component';

describe('FournirDonneesMaterielComponent', () => {
  let component: FournirDonneesMaterielComponent;
  let fixture: ComponentFixture<FournirDonneesMaterielComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FournirDonneesMaterielComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournirDonneesMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit récupérer les noms des matériels', () => {
    //Cas ou il n'y a aucun matériel.
    //(inutile de d'appeler la méthode la première fois car la méthode en déjà appelée dans le constructeur).
    let req = httpTestingController.expectOne(MaterielService.GetApiUrl);
    req.flush([]);
    expect(component.materiels).toEqual([]);

    //Cas ou du matériel est renvoyé
    component.getNomMateriels();
    let req2 = httpTestingController.expectOne(MaterielService.GetApiUrl);
    req2.flush(["{'nom': 'Cellule1','etat': 'Vide','type': 'Cellule'}"]);
    expect(component.materiels[0]).toEqual(["Cellule1"]);
  });
});
