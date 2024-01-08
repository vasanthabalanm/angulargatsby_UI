import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminviewGuard } from './adminview.guard';

describe('adminviewGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminviewGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
