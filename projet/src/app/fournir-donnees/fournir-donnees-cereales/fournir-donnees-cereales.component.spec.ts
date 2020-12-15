import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { FournirDonneesCerealesComponent } from './fournir-donnees-cereales.component';

describe('FournirDonneesCerealesComponent', () => {
  let component: FournirDonneesCerealesComponent;
  let fixture: ComponentFixture<FournirDonneesCerealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      declarations: [ FournirDonneesCerealesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournirDonneesCerealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
