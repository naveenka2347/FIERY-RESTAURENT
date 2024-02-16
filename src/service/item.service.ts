import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../orders/models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  
  url1 = "http://localhost:3000/items"
  constructor(private http: HttpClient) { }

  

  getItems():Observable<Items[]> {
    console.log("getItems" )
     return this.http.get<Items[]>(this.url1)
    }
}
