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
  stockRefresh = true;
  stockSignal: Signal<QuoteResult> = this.inputStock;
  storedStock = signal<QuoteResult | null>(null)
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

  setStockCardBackGround(regularMarketChange: number) {
    if (regularMarketChange >= 0) {
      this.stockCard.nativeElement.classList.add('bg-card-green');
    } else {
      this.stockCard.nativeElement.classList.add('bg-card-red');
    }
  }
}
