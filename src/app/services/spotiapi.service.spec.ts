import { TestBed } from '@angular/core/testing';

import { SpotiapiService } from './spotiapi.service';

describe('SpotiapiService', () => {
  let service: SpotiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
