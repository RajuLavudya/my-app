import { TestBed } from '@angular/core/testing';

import { FliplortService } from './fliplort.service';

describe('FliplortService', () => {
  let service: FliplortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FliplortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
