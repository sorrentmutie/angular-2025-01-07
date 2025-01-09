import { TestBed } from '@angular/core/testing';

import { ThidService } from './third.service';

describe('ThidService', () => {
  let service: ThidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
