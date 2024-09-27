import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ENV } from "../../environments/environment";
import { MARKET_URL } from "../common/constants/url.constants";
import { QuoteResult, StockResponse } from "../model/stock.interface";

@Injectable({
    providedIn: 'root'
})
export class StockService {
    private readonly http = inject(HttpClient);

    getStock(): Observable<QuoteResult[]> {
        return this.http.get<StockResponse>(`${ENV.api}${MARKET_URL}`, {
            headers: {
                'x-rapidapi-key': `${ENV.key}`,
                'x-rapidapi-host': `${ENV.host}`,
            },
            params: {
                region: 'US',
                symbols: 'AMD,IBM,AAPL,NVDA'
            }
        }).pipe(map((response) => { return response.quoteResponse.result }));
    }
}