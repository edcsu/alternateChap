
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';


@Injectable()
export class StaticDataSource {
    private data: Product[];

    constructor() {
        this.data = new Array<Product>(
            new Product(1, 'Vaseline', 'Personal', 'soft skin like a babys', 17500.00, 6000),
            new Product(2, 'Omo', 'Homecare', 'Brightens once in one wash', 4800.95, 634),
            new Product(3, 'Lipton Tea', 'Food', 'Natural tea leaves so soothing', 3500.50, 957),
            new Product(4, 'Fair & Lovely', 'Personal', 'A fairer skin and lovely tone', 3464.95, 645),
            new Product(5, 'Vim', 'Homecare', 'Sparkling white on your home utensils', 9500.00, 254));
    }

    getData(): Product[] {
        return this.data;
    }


    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }

}
