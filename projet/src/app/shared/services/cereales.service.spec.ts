import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CerealesService } from './cereales.service';

describe('CerealesService', () => {
  let service: CerealesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CerealesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
