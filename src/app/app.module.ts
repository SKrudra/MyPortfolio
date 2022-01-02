import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule, ClrIconModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { InvestmentsComponent } from './investments/investments.component';
import { StocksComponent } from './stocks/stocks.component';
import { TickerComponent } from './ticker/ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    InvestmentsComponent,
    StocksComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ClrIconModule,
    HttpClientModule,
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
