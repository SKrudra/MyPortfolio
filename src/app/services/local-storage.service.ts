import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string, fallback: any): any {
    let value = localStorage.getItem(key);
    return (value) ? JSON.parse(value) : fallback;
  }

}
