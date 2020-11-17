import { TestBed } from '@angular/core/testing';

import { ActivityOfferedResolveService } from './activity-offered-resolve.service';

describe('ActivityOfferedResolveService', () => {
  let service: ActivityOfferedResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityOfferedResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
