import { TestBed } from '@angular/core/testing';

import { CompletionRequestService } from './completion-request.service';

describe('CompletionRequestService', () => {
  let service: CompletionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
