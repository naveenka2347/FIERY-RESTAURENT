import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ViewOrderInfoComponent } from '../view-order-info/view-order-info.component';
import { OrderService } from '../../../service/order.service';


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [HttpClientModule,NgFor,RouterLink,RouterOutlet,ViewOrderInfoComponent],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
 ;
  parentData:any
  orders: any[]=[];
  constructor(private router:Router,private http:HttpClient )
  {

  }
  ngOnInit()
  {
    this.getAll()
  }
  getAll() {
    this.http.get('http://localhost:3000/orders')
      .subscribe((res) => { this.parentData = res })
  }
  selectOrder(orderId: number): void {
    this.router.navigate(['/vieworderinfo/'+orderId])
  }
}



 
