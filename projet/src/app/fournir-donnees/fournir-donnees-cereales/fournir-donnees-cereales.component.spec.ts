import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournirDonneesCerealesComponent } from './fournir-donnees-cereales.component';

describe('FournirDonneesCerealesComponent', () => {
  let component: FournirDonneesCerealesComponent;
  let fixture: ComponentFixture<FournirDonneesCerealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
