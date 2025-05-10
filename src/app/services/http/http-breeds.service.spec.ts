import { TestBed } from '@angular/core/testing';

import { HttpBreedsService } from './http-breeds.service';

describe('BreedsService', () => {
  let service: HttpBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
