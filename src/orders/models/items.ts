export class Items 
{
    url: string;
    id:number;
    name:string;
    quantity:number;
    price:number;
    itemValue:number;
   
    constructor( id:number, name:string, quantity:number, price:number, itemValue:number,orderId:string,url:string ) {
       this.id = id;
       this.name = name;
       this.quantity = quantity;
       this.price = price;
       this.itemValue = itemValue;
       this.url = url;
       
}
}
