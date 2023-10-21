import { TestBed } from '@angular/core/testing';

import { AuthSigninGuard } from './auth-signin.guard';

describe('AuthSigninGuard', () => {
  let guard: AuthSigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
