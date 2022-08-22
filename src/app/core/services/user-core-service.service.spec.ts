import { TestBed } from '@angular/core/testing';

import { UserCoreServiceService } from './user-core-service.service';

describe('UserCoreServiceService', () => {
  let service: UserCoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
