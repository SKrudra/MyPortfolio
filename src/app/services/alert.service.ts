import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
