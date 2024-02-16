import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private orders: any[] = [];

private selectedOrderId:number=0

constructor() { }

setOrders(orders: any[]): void {
  this.orders = orders;
}

getOrders(): any[] {
  this
  return this.orders;
}

setSelectedOrderId(orderId: number): void {
  this.selectedOrderId = orderId;
}

getSelectedOrderId(): number {
  return this.selectedOrderId;
}
}

