import { TestBed } from '@angular/core/testing';

import { FormStoreValuesServiceService } from './form-store-values-service.service';

describe('FormStoreValuesServiceService', () => {
  let service: FormStoreValuesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStoreValuesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
