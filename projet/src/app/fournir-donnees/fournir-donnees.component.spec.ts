import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { ConnectionService } from '../shared/services/connection.service';

import { FournirDonneesComponent } from './fournir-donnees.component';

describe('FournirDonneesComponent', () => {
  let component: FournirDonneesComponent;
  let fixture: ComponentFixture<FournirDonneesComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournirDonneesComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournirDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Retourner le titre', () => {
    expect(component.getTitle()).toEqual("Fournir les données");
  });

  it('Doit demander de vérifier si l\'utilisateur est bien un admin', () => {
    //L'utilisateur n'est pas connecté.
    let req = httpTestingController.expectOne(ConnectionService.ApiUrl);
    req.flush("Non connecté", {status : 401, statusText : "Non connecté"});
    
    //L'utilisateur n'est pas un admin.
    component.ngOnInit();
    let req2 = httpTestingController.expectOne(ConnectionService.ApiUrl);
    req2.flush("ok", {status : 200, statusText : "{ username: 'user', password: 'user', role: 'user' }"});
    
    //L'utilisateur est un admin.
    component.ngOnInit();
    let req3 = httpTestingController.expectOne(ConnectionService.ApiUrl);
    req3.flush("ok", {status : 200, statusText : "{ username: 'admin', password: 'admin', role: 'admin' }"});
  });
});
