import { TestBed } from '@angular/core/testing';

import { SwordplayService } from './swordplay.service';

describe('SwordplayService', () => {
  let service: SwordplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwordplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
