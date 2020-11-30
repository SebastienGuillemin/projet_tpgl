import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournirDonneesComponent } from './fournir-donnees.component';

describe('FournirDonneesComponent', () => {
  let component: FournirDonneesComponent;
  let fixture: ComponentFixture<FournirDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournirDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournirDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
