import { Items } from "./items";

export class Order {
    id: number;
    contactName: string;
    orderDate: string;
    itemsOrdered: number;
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
    url: string;
    items:Items[];
    constructor(id: number, contactName: string, orderDate: string,itemsOrdered: number, orderTotal: number, taxTotal: number,  grandTotal: number,url: string,items:Items[] ) {
        this.id = id;
        this.contactName = contactName;
        this.orderDate = orderDate;
        this.itemsOrdered = itemsOrdered;
        this.orderTotal = orderTotal;
        this.taxTotal = taxTotal;
        this.grandTotal = grandTotal;
        this.url = url;
        this.items =items ;
    }

}
