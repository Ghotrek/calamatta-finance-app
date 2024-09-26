import { TestBed } from '@angular/core/testing';

import { MockSignalRService } from './mock-signalr.service';

describe('MockSignalrService', () => {
  let service: MockSignalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSignalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
