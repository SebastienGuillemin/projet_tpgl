import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { Cellule } from '../shared/model/materiels/cellule.model';
import { ConnectionService } from '../shared/services/connection.service';
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
    //(inutile d'appeler ngOnInit() car déjà appelé une fois à la création du composant)
    //Cas où l'utilisateur n'est pas connecté :
    let reqConnection = httpTestingController.expectOne(ConnectionService.ApiUrl);  //Test si l'utilisateur est connecté.
    reqConnection.flush("Non connecté", { status: 401, statusText: "Utilisateur non connecté" });
    expect(component.materiels).toEqual([]);

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

  it('Doit mettre à jour la BD', () => {
    //Cas où il n'y a pas de matériel
    expect(component.materiels[0]).toBeUndefined();

    //Cas où il y a du matériel.
    component.materiels = [new Cellule("Cellule1", "Vide")];
    
    //Cas où tout se passe bien.
    component.actionMateriel(0);
    let req = httpTestingController.expectOne(MaterielService.UpdateApiUrl);
    req.flush("ok");
    
    //Cas où le serveur retourne une erreur.
    component.actionMateriel(0);
    let req2 = httpTestingController.expectOne(MaterielService.UpdateApiUrl);
    req2.flush("Erreur", {status : 500, statusText : "Erreur interne"});
  });
});
