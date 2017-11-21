import { TestBed, inject } from '@angular/core/testing';

import { IoServiceService } from './io-service.service';

describe('IoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IoServiceService]
    });
  });

  it('should be created', inject([IoServiceService], (service: IoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
