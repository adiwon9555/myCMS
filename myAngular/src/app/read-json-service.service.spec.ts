import { TestBed, inject } from '@angular/core/testing';

import { ReadJsonServiceService } from './read-json-service.service';

describe('ReadJsonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadJsonServiceService]
    });
  });

  it('should be created', inject([ReadJsonServiceService], (service: ReadJsonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
