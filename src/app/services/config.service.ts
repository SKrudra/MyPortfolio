import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private static _api: string;

  static set(property: string, value: any) {
    // this['_' + property] = value;
    this._api = value;
  }

  static get(property: string) {
    // return this['_' + property];
    return this._api;
  }
}
