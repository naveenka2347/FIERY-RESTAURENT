import { Component, input } from '@angular/core';
import { OrderService } from '../../../service/order.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [NgIf, HttpClientModule,NgFor],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {

  orderId: number = 0;
  parentData: any
  orderobj: any
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      console.log(this.orderId);
      this.getByid(this.orderId)
    })
  }
  getAll() {
    this.http.get('http://localhost:3000/orders')
      .subscribe((res) => { this.parentData = res });
  }
  getByid(id: number) {
  {
    console.log('getByid')
    this.http.get(`http://localhost:3000/orders/${id}`)
    .subscribe((res1) => { this.orderobj = res1 });
    console.log(this.orderobj);
  }
  }

}
