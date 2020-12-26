import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Materiel } from '../model/materiel.model';

import { MaterielService } from './materiel.service';

describe('MaterielService', () => {
  let service: MaterielService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(MaterielService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created !', () => {
    expect(service).toBeTruthy();
  });

  it('Doit recevoir les données de la bonne adresse', () => {
    service.getMateriels().subscribe(
      res => {
        //Rien à faire
      }
    );
    let req = httpTestingController.expectOne(MaterielService.GetApiUrl);
    expect(req.request.method).toEqual("GET");  
  });

  it('Doit envoyer les données à la bonne adresse', () => {
    //Envoi d'un matériel quelconque.
    service.updateData(new Materiel()).subscribe(
      res => {
        //Rien à faire
      }
    );
    let req = httpTestingController.expectOne(MaterielService.UpdateApiUrl);
    expect(req.request.method).toEqual("POST");  
  });
});
