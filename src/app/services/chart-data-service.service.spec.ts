import { TestBed } from '@angular/core/testing';

import { ChartDataService } from './chart-data-service';

describe('ChartDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartDataService = TestBed.get(ChartDataService);
    expect(service).toBeTruthy();
  });
});
