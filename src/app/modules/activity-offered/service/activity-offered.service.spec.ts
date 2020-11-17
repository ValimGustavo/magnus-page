import { TestBed } from '@angular/core/testing';

import { ActivityOfferedService } from './activity-offered.service';

describe('ActivityOfferedService', () => {
  let service: ActivityOfferedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityOfferedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
