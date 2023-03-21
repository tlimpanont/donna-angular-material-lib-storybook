import { TestBed } from '@angular/core/testing';

import { TheuyUiService } from './theuy-ui.service';

describe('TheuyUiService', () => {
  let service: TheuyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheuyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
