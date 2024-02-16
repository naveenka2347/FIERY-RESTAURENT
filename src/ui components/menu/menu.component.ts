import { Component } from '@angular/core';

import { ItemService } from '../../service/item.service';
import { Items } from '../../orders/models/items';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  items: Items[]=[];
  constructor(private itemservice:ItemService )
  {
    console.log("execution started");
    this.getAll()
  }
  getAll() {
    
    console.log("geting all the items...");
    this.itemservice.getItems().subscribe((itemsList:Items[]) => { this.items = itemsList });
  }
}
