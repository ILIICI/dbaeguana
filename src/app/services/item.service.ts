import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Items } from '../Items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items'

  constructor(private http: HttpClient) { }

  getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.apiUrl);
  }
}
