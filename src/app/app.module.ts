import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
