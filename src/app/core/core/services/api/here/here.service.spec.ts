import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HereApiService } from './here.service';

describe('HereService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: HereApiService = TestBed.get(HereApiService);
    expect(service).toBeTruthy();
  });
});
