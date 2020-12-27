import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnexionComponent } from './deconnexion.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../app-routing.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DeconnexionComponent', () => {
  let component: DeconnexionComponent;
  let fixture: ComponentFixture<DeconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeconnexionComponent ],
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Retourner le titre', () => {
    expect(component.getTitle()).toEqual("Déconnexion");
  });
});
