import { TestBed } from '@angular/core/testing';

import { PepesanMyLibService } from './pepesan-my-lib.service';

describe('PepesanMyLibService', () => {
  let service: PepesanMyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepesanMyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
