import { TestBed } from '@angular/core/testing';

import { MyTestLibService } from './my-test-lib.service';

describe('MyTestLibService', () => {
  let service: MyTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
