import { TestBed } from '@angular/core/testing';

import { Dynamic2009Service } from './dynamic2009.service';

describe('Dynamic2009Service', () => {
  let service: Dynamic2009Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dynamic2009Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
