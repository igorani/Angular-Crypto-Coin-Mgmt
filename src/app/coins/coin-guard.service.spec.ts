import { TestBed, inject } from '@angular/core/testing';

import { CoinGuardService } from './coin-guard.service';

describe('CoinGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinGuardService]
    });
  });

  it('should be created', inject([CoinGuardService], (service: CoinGuardService) => {
    expect(service).toBeTruthy();
  }));
});
