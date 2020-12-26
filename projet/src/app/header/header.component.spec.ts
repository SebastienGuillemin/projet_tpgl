import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { ConnectionService } from '../shared/services/connection.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit récupérer si l\'utilisateur est connecté', () => {
    //Cas où l'utilisateur est connecté :
    let req = httpTestingController.expectOne(ConnectionService.ApiUrl);
    req.flush("utilisateur connecté.");
    expect(component.userConnected).toBeTrue();
    
    //Cas où l'utilisateur n'est pas connecté :
    component.ngOnInit();
    let req2 = httpTestingController.expectOne(ConnectionService.ApiUrl);
    req2.flush("utilisateur non connecté.", {status : 401, statusText : "Non connecté."});
    expect(component.userConnected).toBeFalse();
  });
});
