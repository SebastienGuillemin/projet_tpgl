import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnexionComponent } from './deconnexion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConnectionService } from '../shared/services/connection.service';

describe('DeconnexionComponent', () => {
  let component: DeconnexionComponent;
  let fixture: ComponentFixture<DeconnexionComponent>;
  let httpTestingController: HttpTestingController;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeconnexionComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Retourner le titre', () => {
    expect(component.getTitle()).toEqual("Déconnexion");
  });

  it('Doit prendre en compte la déconnexion de l\'utilisateur', () => {
    let req = httpTestingController.expectOne(ConnectionService.ApiUrlLogout);
    expect(req.request.method).toEqual('GET');
    req.flush("ok");
    expect(component.getConnectionService()["userConnected"]).toBeFalse();
  });
});
