import { TestBed } from '@angular/core/testing';

import { SwordplayerDataSharedService } from './swordplayer-data-shared.service';

describe('SwordplayerDataSharedService', () => {
  let service: SwordplayerDataSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwordplayerDataSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
