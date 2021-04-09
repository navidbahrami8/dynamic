import { TestBed } from '@angular/core/testing';

import { Dynamic2008Service } from './dynamic2008.service';

describe('Dynamic2008Service', () => {
  let service: Dynamic2008Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dynamic2008Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
