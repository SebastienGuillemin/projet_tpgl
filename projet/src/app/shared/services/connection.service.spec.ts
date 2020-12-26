import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { User } from '../model/user.model';
import { ConnectionService } from './connection.service';

describe('ConnectionService', () => {
  //Données de la fausse réponse.
  const mockConnection = {
    "username": "admin",
    "password": "admin",
    "role": "admin"
  };

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

  it('Test de l\'envoi de données', () => {
    //Envoie de la requête par le service (test de la méthode).
    service.postData(new User("admin", "admin")).subscribe(
      //On peut se passer des lignes suivantes car on est sûr que les données reçues seront égales au données envoyées.
      res => {
        expect(res.body).toEqual(mockConnection); //Vérification de la réponse.
      }
    );

    //Vérification qu'une requête a bien été envoyé à l'adresse "api/connection".
    const req = httpTestingController.expectOne(ConnectionService.ApiUrl);

    //Véfication que la requête est de type post.
    expect(req.request.method).toEqual('POST');
    req.flush(mockConnection);  //Envoie des données dans la fausse réponse.
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it()
});
