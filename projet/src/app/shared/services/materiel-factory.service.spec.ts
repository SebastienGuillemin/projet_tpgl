import { TestBed } from '@angular/core/testing';

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
});
