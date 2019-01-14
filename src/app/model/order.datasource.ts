import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { Product } from './product.model';
// import { Cart } from './cart.model';
import { Order } from './order.model';
import { catchError } from 'rxjs/operators';

export const REST_ORDER = new InjectionToken('rest_order');

@Injectable()
export class OrderDataSource {

    constructor(
                    private http: HttpClient,
                    @Inject(REST_ORDER) private url: string
                ) { }

    getOrders(): Observable<Order[]> {
        console.log(this.url);
        console.log(this.http.jsonp<Order[]>(this.url, 'callback'));
        return this.http.get<Order[]>(this.url);
    }

                /*
    getOrders(): Observable<Order[]> {
        return this.http.jsonp<Order[]>(this.ourl, 'callback');
    }
    */

    saveOrder( order: Order): Observable<Order> {
        console.log(this.sendOrderRequest<Order>('POST', this.url, order));
        return this.sendOrderRequest<Order>('POST', this.url, order);
    }

    updateOrder( order: Order): Observable<Order> {
        return this.sendOrderRequest<Order>('PUT',
            `${this.url}/${order.id}`, order);
    }

    deleteOrder(id: number): Observable<Order> {
        return this.sendOrderRequest<Order>('DELETE', `${this.url}/${id}`);
    }

    private sendOrderRequest<T>(verb: string, url: string, body?: Order)
        : Observable<T> {
/*
        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set('Access-Key', '<secret>');
        myHeaders = myHeaders.set('Application-Names', ['chapChapManufacturerApp', 'chapChapMerchantApp']); */

        return this.http.request<T>(verb, url, {
            body: body,
       //     headers: myHeaders
        }).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }

}
