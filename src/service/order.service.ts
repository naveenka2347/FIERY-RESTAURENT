import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../orders/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url1 = "http://localhost:3000/orders"
  constructor(private http: HttpClient) { }

  

  getOrders():Observable<Order[]> {
    
     return this.http.get<Order[]>(this.url1)
    }
    
  getOrdersById(id:string):Observable<Order> {
    const url2 = `http://localhost:3000/orders/${id}`;
    return this.http.get<Order>(url2)
  }
}

