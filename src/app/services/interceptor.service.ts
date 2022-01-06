import { ConfigService } from './config.service';
import { AccountService } from './account.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { Stock } from './stocks.model';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const request = req.clone();
      request.headers.append('Accept', 'application/json');
      return next.handle(request).pipe(
        filter(event => event instanceof HttpResponse),
        tap((event: HttpResponse<any>) => {
          if (event instanceof HttpResponse && event.url === ConfigService.get('api')) {
            const stocks = event.body as Array<Stock>;
            stocks.forEach(stock => {
              this.accountService.stocks.forEach(item => {
                  if (stock.symbol === item.symbol) {
                  item.price = stock.price;
                  item.change = ((stock.price * 100) - (item.cost * 100)) / 100;
                }
              });
            });
            this.accountService.calculateValue();

            return stocks;
          }
        })
        )
    }
}
