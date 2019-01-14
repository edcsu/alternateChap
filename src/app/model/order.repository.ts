
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
// import { StaticDataSource } from './static.datasource';
 import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {

    private orders: Order[] = [];
    // private orders: Order = new Array<Order>();
    private loaded = false;

    private dataSource: RestDataSource;

    constructor() { }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(data => this.orders = data);
    }

    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe( order1 => {
            this.orders.splice(this.orders.
                findIndex(o => o.id === order1.id), 1, order1);
        });
    }
    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id === o.id));
        });
    }

}
