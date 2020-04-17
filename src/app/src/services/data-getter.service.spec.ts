import { TestBed } from '@angular/core/testing';

import { DataGetterService } from './data-getter.service';

describe('DataGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGetterService = TestBed.get(DataGetterService);
    expect(service).toBeTruthy();
  });
});
