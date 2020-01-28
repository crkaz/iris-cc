import { TestBed, async, inject } from '@angular/core/testing';

import { OuterAuthGuard } from './outer-auth.guard';

describe('OuterAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OuterAuthGuard]
    });
  });

  it('should ...', inject([OuterAuthGuard], (guard: OuterAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
