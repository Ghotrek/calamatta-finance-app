import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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

   /**
   * @method
   * @description Http call Rapid API information
   * @param {string} region - Refer to region where API get market quotas
   * @param {string} symbols - Symbol of market stock separated with comma
   * @return {Observable<QuoteResult[]>} The API response
   */
    getStock(region = 'US', symbols = 'AMD,IBM,AAPL,NVDA'): Observable<QuoteResult[]> {
        return this.http.get<StockResponse>(`${ENV.api}${MARKET_URL}`, {
            headers: {
                'x-rapidapi-key': `${ENV.key}`,
                'x-rapidapi-host': `${ENV.host}`,
            },
            params: {
                region: region,
                symbols: symbols
            }
        }).pipe(map((response) => {
            return response.quoteResponse.result 
        }));
    }
}