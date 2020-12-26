import { TestBed } from '@angular/core/testing';
import { Alarme } from '../model/materiels/alarme.model';
import { Boisseau } from '../model/materiels/boisseau.model';
import { Cellule } from '../model/materiels/cellule.model';
import { ElevateurGodet } from '../model/materiels/elevateur-godet.model';
import { Fosse } from '../model/materiels/fosse.model';
import { PontBascule } from '../model/materiels/pont-bascule.model';
import { Silo } from '../model/materiels/silo.model';
import { Sonde } from '../model/materiels/sonde.model';
import { TourManutention } from '../model/materiels/tour-manutention.model';
import { Ventillation } from '../model/materiels/ventillation.model';

import { MaterielFactoryService } from './materiel-factory.service';

describe('MaterielFactoryService', () => {
  let service: MaterielFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Doit retourner le bon matériel', () => {
    //Test du cas où le type de matériel n'est pas dans la liste :
    expect(service.createMateriel("Pas dans la liste")).toBeNull();

    //Test pour tous les matériels :
    expect(service.createMateriel("Silo")).toEqual(new Silo());
    expect(service.createMateriel("Cellule")).toEqual(new Cellule());
    expect(service.createMateriel("TourManutention")).toEqual(new TourManutention());
    expect(service.createMateriel("Boisseau")).toEqual(new Boisseau());
    expect(service.createMateriel("Fosse")).toEqual(new Fosse());
    expect(service.createMateriel("Ventillation")).toEqual(new Ventillation());
    expect(service.createMateriel("Alarme")).toEqual(new Alarme());
    expect(service.createMateriel("ElevateurGodet")).toEqual(new ElevateurGodet());
    expect(service.createMateriel("PontBascule")).toEqual(new PontBascule());
    expect(service.createMateriel("Sonde")).toEqual(new Sonde());
  });
});
