import { Component, input } from '@angular/core';
import { OrderService } from '../../../service/order.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Order } from '../../models/order';


@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [NgIf, HttpClientModule,NgFor],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {

  orderId: string ='';
  orders: Order[] = [];
  orderobj: Order={
    id: 0,
    contactName: '',
    orderDate: '',
    itemsOrdered: 0,
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0,
    url: '',
    items: []
  };

  constructor(private route: ActivatedRoute, private orderservice:OrderService) {
    
   }
  

  ngOnInit(): void {
    console.log("ng on it executing")
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      this.getByid(this.orderId)
      
    })
  }
  // getAll() {
    
  //   this.orderservice.getOrders().subscribe((orders) => { this.orders = orders });
  // }
  getByid(id: string) {
  {
    console.log("get by id")
    this.orderservice.getOrdersById(id).subscribe((order) => { this.orderobj = order});
  }
  }

}
