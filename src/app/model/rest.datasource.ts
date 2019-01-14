import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { Product } from './product.model';
// import { Cart } from './cart.model';
import { Order } from './order.model';
import { catchError, map } from 'rxjs/operators';

export const REST_URL = new InjectionToken('rest_url');
export const REST_ORDER = new InjectionToken('rest_order');

@Injectable()
export class RestDataSource {
    constructor(
                    private http: HttpClient,
                    @Inject(REST_URL) private url: string,
                    @Inject(REST_ORDER) private ourl: string
                ) { }

                /*
    getData(): Observable<any[]> {
        return forkJoin(
                                this.http.jsonp<Product[]>(this.url, 'callback'),
                                this.sendOrderRequest<Order[]>('GET', this.ourl)
                        ).pipe(
                            map(
                                    product =>
                            )
                        );
                    }
                    */

    getData(): Observable<Product[]> {
        return this.http.jsonp<Product[]>(this.url, 'callback');
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>('POST', this.url, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>('PUT',
            `${this.url}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest<Product>('DELETE', `${this.url}/${id}`);
    }

    getOrders(): Observable<Order[]> {
        console.log(this.http.get(this.ourl));
       // return this.sendOrderRequest<Order[]>('GET', this.ourl);
        return this.http.get <Order[]>(this.ourl);
    }

    saveOrder( order: Order): Observable<Order> {
        return this.sendOrderRequest<Order>('POST', this.ourl, order);
    }

    updateOrder( order: Order): Observable<Order> {
        return this.sendOrderRequest<Order>('PUT',
            `${this.ourl}/${order.id}`, order);
    }

    deleteOrder(id: number): Observable<Order> {
        return this.sendOrderRequest<Order>('DELETE', `${this.ourl}/${id}`);
    }

    private sendRequest<T>(verb: string, url: string, body?: Product)
        : Observable<T> {

        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set('Access-Key', '<secret>');
        myHeaders = myHeaders.set('Application-Names', ['chapChapManufacturerApp', 'chapChapMerchantApp']);

        return this.http.request<T>(verb, url, {
            body: body,
            headers: myHeaders
        }).pipe(catchError((error: Response) =>
        throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }

    private sendOrderRequest<T>(verb: string, ourl: string, body?: Order)
        : Observable<T> {

        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set('Access-Key', '<secret>');
        myHeaders = myHeaders.set('Application-Names', ['chapChapManufacturerApp', 'chapChapMerchantApp']);

        return this.http.request<T>(verb, ourl, {
            body: body,
            headers: myHeaders
        }).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }

}
