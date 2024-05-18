import { TestBed } from '@angular/core/testing';

import { ShopListingServiceService } from './shop-listing-service.service';

describe('ShopListingServiceService', () => {
  let service: ShopListingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopListingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
