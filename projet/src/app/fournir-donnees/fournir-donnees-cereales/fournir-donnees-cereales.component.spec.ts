import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Cereale } from 'src/app/shared/model/cereale.model';
import { CerealesService } from 'src/app/shared/services/cereales.service';

import { FournirDonneesCerealesComponent } from './fournir-donnees-cereales.component';

describe('FournirDonneesCerealesComponent', () => {
  let component: FournirDonneesCerealesComponent;
  let fixture: ComponentFixture<FournirDonneesCerealesComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      declarations: [ FournirDonneesCerealesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournirDonneesCerealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit envoyer les données', () => {
    //Envoie des données où tout se passe bien.
    //Remplissage des données comme si l'utilisateur écrivai dans le formulaire:
    let form = component.form;
    form.controls["num"].setValue(1);
    form.controls["type"].setValue("Maïs");
    form.controls["poids"].setValue(150);
    form.controls["qualite"].setValue("Bonne");
    form.controls["acheminement"].setValue("Lyon, Paris");

    component.onSubmit();
    let req = httpTestingController.expectOne(CerealesService.PostApiUrl);
    req.flush([]);
    expect(component.getCereale()).toEqual(new Cereale());

    //Envoie des données avec erreur venant du serveur.
    //Remplissage des données comme si l'utilisateur écrivai dans le formulaire:
    form = component.form;
    form.controls["num"].setValue(1);
    form.controls["type"].setValue("Maïs");
    form.controls["poids"].setValue(150);
    form.controls["qualite"].setValue("Bonne");
    form.controls["acheminement"].setValue("Lyon, Paris");

    component.onSubmit();
    let req2 = httpTestingController.expectOne(CerealesService.PostApiUrl);
    req2.flush("erreur", { status : 500, statusText : "Erreur interne"});
    expect(component.errors).toEqual(["Code d'erreur : 500.\nUne erreur est survenue, merci de réessayer plus tard."])
    expect(component.getCereale()).toEqual(new Cereale());
  });

  it('Doit renvoyer le lot de céréales', () => {
    //Le seul cas testable est le cas où le lot de céréale est vide.
    //En effet, on est sûr qu'un lot de céréale est bien créé (voir constructeur du composant).
    expect(component.getCereale()).toEqual(new Cereale());

    let cereale = new Cereale(1, "Maïs", 150, "Bonne", "Lyon");
    component.setCereale(cereale);
    expect(component.getCereale()).toEqual(cereale);
  });
});
