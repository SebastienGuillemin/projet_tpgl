import { TestBed } from '@angular/core/testing';
import { routes } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CerealesService } from './cereales.service';

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('doit recevoir les données des cereales avec la backend', () => {
    const mockCereales = [{
      "num": 1,
      "type": "Maïs",
      "poids": "25",
      "qualite": "Bonne",
      "acheminement": "Paris, Lyon, Grenoble"
    },
    {
      "num": 2,
      "type": "Colza",
      "poids": "50",
      "qualite": "Très bonne",
      "acheminement": "Bordeaux, Marseille"
    }]

    service.getCereales()
      .subscribe(
        res => {
          expect(res.body[0]).toEqual(mockCereales[0])
          expect(res.body[1]).toEqual(mockCereales[1])
        });

    const req = httpTestingController.expectOne(CerealesService.GetApiUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(mockCereales);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
