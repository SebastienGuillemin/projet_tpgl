import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealesComponent } from './cereales.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CerealesService } from '../shared/services/cereales.service';
import { Cereale } from '../shared/model/cereale.model';
import { ConnectionService } from '../shared/services/connection.service';

describe('CerealesComponent', () => {
  let component: CerealesComponent;
  let fixture: ComponentFixture<CerealesComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CerealesComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Retourner le titre', () => {
    expect(component.getTitle()).toEqual("Voir les lots de céréales");
  });

  it('Doit récupérer les céréales', () => {
    //(inutile d'appeler ngOnInit() car déjà appelé une fois à la création du composant)
    //Cas où l'utilisateur n'est pas connecté :
    let reqConnection = httpTestingController.expectOne(ConnectionService.ApiUrl);  //Test si l'utilisateur est connecté.
    reqConnection.flush("Non connecté", { status: 401, statusText: "Utilisateur non connecté" });
    let req = httpTestingController.expectOne(CerealesService.GetApiUrl); //Cette url est tout même appelée mais l'utilisateur sera redirigé.
    expect(component.cereales).toEqual([]);
    
    //Cas où aucune céréale n'est retournée:
    component.ngOnInit();
    let reqConnection2 = httpTestingController.expectOne(ConnectionService.ApiUrl);  //Test si l'utilisateur est connecté.
    let req2 = httpTestingController.expectOne(CerealesService.GetApiUrl);
    req2.flush([]);
    expect(component.cereales).toEqual([]);
    
    component.ngOnInit();
    let reqConnection3 = httpTestingController.expectOne(ConnectionService.ApiUrl);  //Test si l'utilisateur est connecté.
    let req3 = httpTestingController.expectOne(CerealesService.GetApiUrl);
    //Réponse avec un lot de céréale.
    req3.flush([{
      "num": 1,
      "type": "1",
      "poids": 1,
      "qualite": "Bonne",
      "acheminement": "Lyon, Paris, Nantes"
    }]);
    expect(component.cereales).toEqual([new Cereale(1, "1", 1, "Bonne", "Lyon, Paris, Nantes")]);

    httpTestingController.verify();
  });
});
