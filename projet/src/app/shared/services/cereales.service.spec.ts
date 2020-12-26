import { TestBed } from '@angular/core/testing';
import { routes } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CerealesService } from './cereales.service';
import { Cereale } from '../model/cereale.model';

describe('CerealesService', () => {
  let service: CerealesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CerealesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Doit recevoir les données des cereales avec la backend', () => {
    service.getCereales().subscribe(
      res => {
        //Rien à faire.
      }
    );

    let req = httpTestingController.expectOne(CerealesService.GetApiUrl);
    expect(req.request.method).toEqual("GET");
  });

  it('Doit envoyer les données au serveur à la bonne adresse', () => {
    //Envoie d'un lot quelconque.
    service.postData(new Cereale()).subscribe(
      res => {
        //Rien à faire.
      }
    );

    let req = httpTestingController.expectOne(CerealesService.PostApiUrl);
    expect(req.request.method).toEqual("POST");
  });
});
