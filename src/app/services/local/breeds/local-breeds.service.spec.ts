import { TestBed } from '@angular/core/testing';

import { LocalBreedsService } from './local-breeds.service';

describe('BreedsService', () => {
  let service: LocalBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
