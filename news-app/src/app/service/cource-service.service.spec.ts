import { TestBed } from '@angular/core/testing';

import { CourceServiceService } from './cource-service.service';

describe('CourceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourceServiceService = TestBed.get(CourceServiceService);
    expect(service).toBeTruthy();
  });
});
