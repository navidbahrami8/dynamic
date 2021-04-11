import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dynamic } from '../interFace/dynamic';

@Injectable({
  providedIn: 'root'
})
export class Dynamic2009Service {
  configUrl = '/assets/json/dynamic2009.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Dynamic>(this.configUrl);
  }
}
