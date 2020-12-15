import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConnectionService } from './connection.service';
import { routes } from 'src/app/app-routing.module';
import { User } from '../model/user.model';

describe('ConnectionService', () => {
  let service: ConnectionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(ConnectionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('doit recevoir les données de connection avec la backend', () => {
    const mockConnection = {
      "username": "admin",
      "password": "admin",
      "role": "admin"
    }

    service.postObservable(mockConnection as User).subscribe(
      res => {
        expect(res.body).toEqual(mockConnection)
    });

    const req = httpTestingController.expectOne(ConnectionService.ApiUrl);

    expect(req.request.method).toEqual('POST');

    req.flush(mockConnection);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
