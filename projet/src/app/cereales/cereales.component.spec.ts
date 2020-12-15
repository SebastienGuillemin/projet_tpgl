import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealesComponent } from './cereales.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CerealesComponent', () => {
  let component: CerealesComponent;
  let fixture: ComponentFixture<CerealesComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerealesComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
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
