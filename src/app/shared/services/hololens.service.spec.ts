import { TestBed } from '@angular/core/testing';

import { HololensService } from './hololens.service';

describe('HololensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HololensService = TestBed.get(HololensService);
    expect(service).toBeTruthy();
  });
});
