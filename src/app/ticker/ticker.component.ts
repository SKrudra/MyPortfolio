import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Stock } from '../services/stocks.model';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit, OnChanges {

  @Input('stocks') _stocks: Stock[] = [];
  stocks: any = [];
  interval: any;
  page: number = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextStock();
    }, 3000);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this._stocks.length && this._stocks.length < 30) {
        if (this.page * 100 > this._stocks.length) {
          this.page = 0;
        }
        let additions = this._stocks.slice(this.page * 100, (this.page + 1) * 100);
        this.stocks.push(...additions);
        this.page++;
      }
  }

  private nextStock(): void {
    this.stocks.splice(0, 1);
  }
}
