import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealesComponent } from './cereales.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CerealesService } from '../shared/services/cereales.service';
import { Cereale } from '../shared/model/cereale.model';

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
    //Cas où aucune céréale n'est retournée:
    //(inutile d'appeler ngOnInit() car déjà appelé une fois à la création du composant)
    let req = httpTestingController.expectOne(CerealesService.GetApiUrl);
    req.flush([]);
    expect(component.cereales).toEqual([]);

    component.ngOnInit();
    let req2 = httpTestingController.expectOne(CerealesService.GetApiUrl);
    //Réponse avec un lot de céréale.
    req2.flush([{
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
