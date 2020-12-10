import { TestBed } from '@angular/core/testing';

import { CerealesService } from './cereales.service';

describe('CerealesService', () => {
  let service: CerealesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerealesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
