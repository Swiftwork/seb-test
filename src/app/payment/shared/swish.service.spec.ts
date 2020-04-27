import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SwishService } from './swish.service';

describe('SwishService', () => {
  let service: SwishService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SwishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
