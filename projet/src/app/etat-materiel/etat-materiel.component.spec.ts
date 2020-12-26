import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { Cellule } from '../shared/model/materiels/cellule.model';
import { MaterielService } from '../shared/services/materiel.service';

import { EtatMaterielComponent } from './etat-materiel.component';

describe('EtatMaterielComponent', () => {
  let component: EtatMaterielComponent;
  let fixture: ComponentFixture<EtatMaterielComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatMaterielComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Retourner le titre', () => {
    expect(component.getTitle()).toEqual("Voir état du matériel");
  });

  it('Doit récupérer les données depuis le serveur', () => {
    //Cas où un tableau vide est retourné :
    let req = httpTestingController.expectOne(MaterielService.GetApiUrl);
    req.flush([]);
    expect(component.materiels).toEqual([]);

    //Cas où un tableau non vide est renvoyé
    component.ngOnInit();
    let req2 = httpTestingController.expectOne(MaterielService.GetApiUrl);
    req2.flush([{
      "nom": "Cellule1",
      "etat": "Vide",
      "type": "Cellule"
    }]);
    expect(component.materiels).toEqual([new Cellule("Cellule1", "Vide")]);
  });
});
