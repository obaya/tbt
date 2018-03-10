import { TestBed, inject } from '@angular/core/testing';

import { GetPositionService } from './get-position.service';

describe('GetPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPositionService]
    });
  });

  it('should be created', inject([GetPositionService], (service: GetPositionService) => {
    expect(service).toBeTruthy();
  }));
});
