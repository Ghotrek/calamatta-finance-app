import { inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StockService } from './stock.service';
import { QuoteResult } from '../model/stock.interface';

@Injectable({
  providedIn: 'root',
})
export class MockSignalRService {
  private mockSignalRSubject = new BehaviorSubject<QuoteResult[]>([]);
  private readonly _STOCK_SERVICE = inject(StockService);

  get signalR(): Observable<QuoteResult[]> {
    return this.mockSignalRSubject.asObservable();
  }

  constructor() {
    // Load stock data for first time
    this.realTimeStock();
    // Simulate receiving messages every 10 seconds
    setInterval(() => {
      this.realTimeStock();
    }, 10000);
  }

  sendMessage(message: string) {
    console.log(`Mock sending message: ${message}`);
  }

  private realTimeStock() {
    this._STOCK_SERVICE.getStock().subscribe({
        next: (stockValue) => {
            this.mockSignalRSubject.next(stockValue);
        },
    });
  }
}