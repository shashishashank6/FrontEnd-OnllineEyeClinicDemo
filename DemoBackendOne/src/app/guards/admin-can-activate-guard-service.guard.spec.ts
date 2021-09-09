import { TestBed } from '@angular/core/testing';

import { AdminCanActivateGuardServiceGuard } from './admin-can-activate-guard-service.guard';

describe('AdminCanActivateGuardServiceGuard', () => {
  let guard: AdminCanActivateGuardServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminCanActivateGuardServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
