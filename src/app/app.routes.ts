import { Routes } from '@angular/router';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { HomeComponent } from '../ui components/home/home.component';
import { ViewOrderInfoComponent } from '../orders/components/view-order-info/view-order-info.component';

export const routes: Routes = [
    {
        path:"vieworders",component:ViewOrdersComponent
    },
    {
        path:"",component:HomeComponent
    },
    {
        path:"vieworderinfo/:id",component:ViewOrderInfoComponent
    }
];
