import { Component, inject, OnInit, signal } from '@angular/core';
import { QuoteResult } from '../model/stock.interface';
import { SignalRService } from '../services/signalr.service';
import { StockComponent } from './stock/stock.component';
import { LoaderComponent } from '../common/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StockComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  //signal for binding data to app-stock component
  stocks = signal<QuoteResult[] | null>(null);
  
  //show/hide error toast message
  serviceError = signal<boolean>(false);
  private readonly _SIGNALR_SERVICE = inject(SignalRService);

  ngOnInit(): void {
    this._SIGNALR_SERVICE.signalR.subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.stocks.set(response);
        }
      },
      error: () => this.errorHandlig(true),
    });

    this._SIGNALR_SERVICE.signalRError.subscribe({
      next: (error) => {
        this.errorHandlig(error);
      },
      error: () => this.errorHandlig(true),
    });
  }

  closeToast() {
    this.serviceError.set(false);
  }

  private errorHandlig(error: boolean) {
    this.serviceError.set(error);
    this.stocks.set(null);
  }
}
