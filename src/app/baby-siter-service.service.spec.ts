import { TestBed } from '@angular/core/testing';

import { BabySiterServiceService } from './Service/baby-siter-service.service';

describe('BabySiterServiceService', () => {
  let service: BabySiterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabySiterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
