import { ConfigService } from './config.service';
import { Stock } from './stocks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStocks() {
    return this.http.get<Array<Stock>>(ConfigService.get('api'));
  }
}
