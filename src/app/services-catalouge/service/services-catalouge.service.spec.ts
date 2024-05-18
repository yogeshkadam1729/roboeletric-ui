import { TestBed } from '@angular/core/testing';

import { ServicesCatalougeService } from './services-catalouge.service';

describe('ServicesCatalougeService', () => {
  let service: ServicesCatalougeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCatalougeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
