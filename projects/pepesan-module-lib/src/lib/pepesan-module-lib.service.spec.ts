import { TestBed } from '@angular/core/testing';

import { PepesanModuleLibService } from './pepesan-module-lib.service';

describe('PepesanModuleLibService', () => {
  let service: PepesanModuleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepesanModuleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
