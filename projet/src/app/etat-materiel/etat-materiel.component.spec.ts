import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatMaterielComponent } from './etat-materiel.component';

describe('EtatMaterielComponent', () => {
  let component: EtatMaterielComponent;
  let fixture: ComponentFixture<EtatMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
