import { Component, computed, ElementRef, input, signal, Signal, ViewChild } from '@angular/core';
import { QuoteResult } from '../../model/stock.interface';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  inputStock = input.required<QuoteResult>();
  
  //Used for update Stock UI, if true UI render updated data in false UI render stored data
  stockRefresh = true;

  //this signal it's required for computed signal
  stockSignal: Signal<QuoteResult> = this.inputStock;
  
  //This property it's init after View Init and used for mantain old data in case user turn off the update
  storedStock = signal<QuoteResult | null>(null)
  
  //Computed signal evaluate stockRefresh and it's true new data is returned, if false returnded data stored into storedStock property
  stock = computed(() => {
    if (this.stockRefresh) {
      console.log(`Stock ${this.stockSignal().symbol} it's refreshed`);
      return this.stockSignal();
    } else {
      console.log(`Stock ${this.stockSignal().symbol} not refreshed`);
      return this.storedStock();
    }
  });

  @ViewChild('stockCard') stockCard!: ElementRef;

  ngAfterViewInit(): void {
    this.storedStock.set(this.stockSignal());
    this.setStatus(this.stockRefresh);
  }

  /**
   * @method
   * @description This method update is used from toggle button and update UI. 
   *              When checked param is true disable class it's removed and called setStockCardBackGround method,
   *              else remove class that show if strock it's in positive or not and add disabled class.
   * @param {boolean} checked - Refer to region where API get market quotas
   */
  setStatus(checked: boolean) {
    this.stockRefresh = checked;
    if (checked) {
      this.stockCard.nativeElement.classList.remove('bg-card-disabled');
      this.setStockCardBackGround(this.stock()!.regularMarketChange);
    } else {
      this.stockCard.nativeElement.classList.remove('bg-card-red');
      this.stockCard.nativeElement.classList.remove('bg-card-green');
      this.stockCard.nativeElement.classList.add('bg-card-disabled');
    }
  }

  /**
   * @method
   * @description When param regularMarketChange is > or = to 0 added class that indicate stock gain in positive (green).
   *              If param is negative added class that indicate stock it negative (red).
   * @param {number} regularMarketChange - Refer to region where API get market quotas
   */
  setStockCardBackGround(regularMarketChange: number) {
    if (regularMarketChange >= 0) {
      this.stockCard.nativeElement.classList.add('bg-card-green');
    } else {
      this.stockCard.nativeElement.classList.add('bg-card-red');
    }
  }
}
