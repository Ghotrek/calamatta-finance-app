import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { SignalRService } from '../services/signalr.service';
import { MockMarketResponse } from '../../market-mock-for-test';
import { QuoteResult } from '../model/stock.interface';

class MockSignalRService {
  signalR = {
    subscribe: (observer: { next: (response: QuoteResult[]) => void; error: (err: any) => void }) => {
      // Simulate emitting data
      observer.next(MockMarketResponse.quoteResponse.result); // Emit a test value
    },
  };
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let signalRService: SignalRService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        { provide: SignalRService, useClass: MockSignalRService }
      ],
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    signalRService = TestBed.inject(SignalRService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set stocks when subscription emits data', () => {
    component.ngOnInit();

    expect(component.stocks()).not.toBeNull();
    expect(component.stocks()).toEqual(MockMarketResponse.quoteResponse.result);
  });

});
