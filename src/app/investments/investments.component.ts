import { Stock } from './../services/stocks.model';
import { AccountService } from './../services/account.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements DoCheck {

  cost = 0;
  value = 0;
  chagne = 0;
  stocks: Stock[] = [];

  constructor(public accountService: AccountService) { }

  ngDoCheck() {
    if (this.accountService.stocks.length !== this.stocks.length) {
      this.stocks = this.accountService.stocks;
    }
    if (this.cost !== this.accountService.cost || this.value !== this.accountService.value) {
      this.cost = this.accountService.cost;
      this.value = this.accountService.value;
      this.chagne = this.accountService.value - this.accountService.cost;      
    }
  }

  sell(index: number): void {
    this.accountService.sell(index);
  }
}
