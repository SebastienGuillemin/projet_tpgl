import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CerealesComponent } from './cereales.component';

describe('CerealesComponent', () => {
  let component: CerealesComponent;
  let fixture: ComponentFixture<CerealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerealesComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
