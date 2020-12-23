import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournirDonneesMaterielComponent } from './fournir-donnees-materiel.component';

describe('FournirDonneesMaterielComponent', () => {
  let component: FournirDonneesMaterielComponent;
  let fixture: ComponentFixture<FournirDonneesMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournirDonneesMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournirDonneesMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
