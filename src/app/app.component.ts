import { AlertService } from './services/alert.service';
import { StockService } from './services/stock.service';
import { Stock } from './services/stocks.model';
import { AccountService } from './services/account.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'MyPortfolio';

  refersh = true;
  interval !: any;
  stocks !: Stock[];

  constructor(public accountService: AccountService, private stockService: StockService, private alertService: AlertService) { }

  ngOnInit(): void {
      this.load();

      this.interval = setInterval(() => {
        if (this.refersh) {
          this.load();
        }
      }, 15000);
  }

  private load() {
    this.stockService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
    // }, error => {
      // console.error(`There was an error loading stocks: ${error}`);
    });
  }


  toggleRefersh() {
    this.refersh =  !this.refersh;
    let onOff = (this.refersh) ? 'on' : 'off';
    this.alertService.alert(`You have turned automatic refresh ${onOff}`, 'info', 0);
  }
  
  reset() {
    this.accountService.reset();
    this.alertService.alert('You have reset your portfolio');
  }

  ngOnDestroy(): void {
      clearInterval(this.interval);
  }
}
