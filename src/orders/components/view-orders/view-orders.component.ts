import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ViewOrderInfoComponent } from '../view-order-info/view-order-info.component';
import { OrderService } from '../../../service/order.service';

import { Order } from '../../models/order';


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [HttpClientModule,NgFor,RouterLink,RouterOutlet,ViewOrderInfoComponent],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
 ;
  
  orders: Order[]=[];
  constructor(private router:Router,private orderservice:OrderService )
  {

  }
  ngOnInit()
  {
    this.getAll()
  }
  getAll() {
    
    this.orderservice.getOrders().subscribe((orderList:Order[]) => { this.orders = orderList });
  }
  selectOrder(orderId: number): void {
    this.router.navigate(['/vieworderinfo/'+orderId])
    console.log("selecting the order")
    console.log(orderId)
  }
}



 
