import { Stock } from './../services/stocks.model';
import { AccountService } from './../services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent {

  constructor(private accountService: AccountService) { }

  buy(stock: Stock): void {
    this.accountService.purchase(stock);
  }
}
