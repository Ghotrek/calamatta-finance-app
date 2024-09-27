import { TestBed } from '@angular/core/testing';

import { StockService } from './stock.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { MARKET_URL } from '../common/constants/url.constants';
import { ENV } from '../../environments/environment';
import { MockMarketResponse } from '../../market-mock-for-test';

describe('StockService', () => {
  let service: StockService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockService,
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),],
    });
    service = TestBed.inject(StockService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get data from http', async () => {
    const marketStocks$ = service.getStock();
    const marketStocksPromise = firstValueFrom(marketStocks$);
    const req = httpClient.expectOne(`${ENV.api}${MARKET_URL}?region=US&symbols=AMD,IBM,AAPL,NVDA`, 'Request to load the marcket stocks');
    expect(req.request.method).toBe('GET');
    req.flush(MockMarketResponse);
    expect(await marketStocksPromise).toEqual(MockMarketResponse.quoteResponse.result);
    httpClient.verify();
  });
});