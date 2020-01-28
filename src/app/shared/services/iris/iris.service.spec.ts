import { TestBed } from '@angular/core/testing';

import { IrisService } from './iris.service';

describe('HololensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IrisService = TestBed.get(IrisService);
    expect(service).toBeTruthy();
  });
});
