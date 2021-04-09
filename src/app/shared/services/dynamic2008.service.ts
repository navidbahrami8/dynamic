import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Dynamic2008Service {
  configUrl = '/assets/json/dynamic2008.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.configUrl);
  }
}
