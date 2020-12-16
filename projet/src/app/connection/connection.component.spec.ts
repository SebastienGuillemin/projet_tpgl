import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionComponent } from './connection.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConnectionComponent', () => {
  let component: ConnectionComponent;
  let fixture: ComponentFixture<ConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
