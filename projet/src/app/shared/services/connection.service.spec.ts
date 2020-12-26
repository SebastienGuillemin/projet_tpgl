import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { User, UserRole } from '../model/user.model';
import { ConnectionService } from './connection.service';

describe('ConnectionService', () => {
  //Données de la fausse réponse.
  const mockConnectionAdmin = {
    "username": "admin",
    "password": "admin",
    "role": "admin"
  };

  const mockConnectionUser = {
    "username": "user",
    "password": "user",
    "role": "user"
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

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Doit de envoyer les données', () => {
    //Envoie de la requête par le service (test de la méthode).
    service.postData(new User("admin", "admin")).subscribe(
      //On peut se passer des lignes suivantes car on est sûr que les données reçues seront égales au données envoyées.
      res => { }
    );

    //Vérification qu'une requête a bien été envoyé à l'adresse "api/connection".
    const req = httpTestingController.expectOne(ConnectionService.ApiUrl);

    //Véfication que la requête est de type post.
    expect(req.request.method).toEqual('POST');
  });

  it('Doit récupérer de l\'utilisateur', () => {
    service.getUser().subscribe(
      res => { }
    );

    const req = httpTestingController.expectOne(ConnectionService.ApiUrl);
    expect(req.request.method).toEqual('GET');
  });

  it('Doit exécuter fonction si accès non autorisé', () => {
    var valid = true;

    //On test le cas où l'utilisateur n'est pas autorisé :
    //Appelle de la fonction et passage du callback. 
    service.redirectIfNotAuthorized(UserRole.Admin, function () { valid = false; })
    //Vérification de l'url.
    const req1 = httpTestingController.expectOne(ConnectionService.ApiUrl);
    //Vérificatio du type de la requête.
    expect(req1.request.method).toEqual('GET');
    //Envoie des fausses données.
    req1.flush(mockConnectionUser);

    //valid a changé car l'utilisateur n'a pas le bon rôle.
    expect(valid).toEqual(false);


    //Test du cas où l'utilisateur est autoriser :
    valid = true;
    service.redirectIfNotAuthorized(UserRole.Admin, function () { valid = false; })
    const req2 = httpTestingController.expectOne(ConnectionService.ApiUrl);
    expect(req2.request.method).toEqual('GET');
    req2.flush(mockConnectionAdmin);

    //valid n'a pas changé car l'utilisateur a le bon rôle.
    expect(valid).toEqual(true);

    //Test du cas d'erreur :
    valid = true;
    service.redirectIfNotAuthorized(UserRole.Admin, function () { valid = false; })
    const req3 = httpTestingController.expectOne(ConnectionService.ApiUrl);
    expect(req3.request.method).toEqual('GET');
    req3.flush("Erreur", { status: 500, statusText: "Erreur interne" });

    expect(valid).toEqual(false);

  });
});
