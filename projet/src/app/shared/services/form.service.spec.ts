import { TestBed } from '@angular/core/testing';
import { ModelFormInterface } from '../model/modelFormInterface';
import { User, UserRole } from '../model/user.model';

import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;
  let model: ModelFormInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
    model = new User();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Doit retourner le bon modèle', () => {
    //Cas où il n'y a pas de modèle : 
    expect(service.getModel()).toBeUndefined();

    //Cas où il y a un modèle:
    service.setModel(model);
    expect(service.getModel()).toEqual(model);
  });

  it('Doit hydrater le modèle', () => {
    service.setModel(model);
    let form = service.getForm();

    //Simulation du remplissage du formulaire par un utilisateur.
    form.controls["username"].setValue("user");
    form.controls["password"].setValue("user");
    service.hydrate();

    let userExpected = new User("user", "user");
    expect(service.getModel()).toEqual(userExpected);
  });
});
