import { TestBed, inject } from '@angular/core/testing';

import { ProfileDetailsService } from './profileDetails.service';

describe('ProfileDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDetailsService]
    });
  });

  it('should ...', inject([ProfileDetailsService], (service: ProfileDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
