import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from '../item/item.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderModule { 
item: ItemModule[] = [];
  constructor(orderNo:number,ContactName:string,OrderDate:string,ItemsOrdered:number,OrderTotal:number,taxTotal:number,GrandTotal:number)
  {

  }
}
