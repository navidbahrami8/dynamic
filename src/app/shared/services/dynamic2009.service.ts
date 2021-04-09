import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dynamic2009Service {
  configUrl = '/assets/json/dynamic2009.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.configUrl);
  }
}
