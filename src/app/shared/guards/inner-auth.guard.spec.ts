import { TestBed, async, inject } from '@angular/core/testing';

import { InnerAuthGuard } from './inner-auth.guard';

describe('InnerAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InnerAuthGuard]
    });
  });

  it('should ...', inject([InnerAuthGuard], (guard: InnerAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
