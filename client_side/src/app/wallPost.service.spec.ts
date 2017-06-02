import { TestBed, inject } from '@angular/core/testing';

import { WallPostService } from './wallPost.service';

describe('WallPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallPostService]
    });
  });

  it('should ...', inject([WallPostService], (service: WallPostService) => {
    expect(service).toBeTruthy();
  }));
});
