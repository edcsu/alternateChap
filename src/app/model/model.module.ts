
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
// import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RestDataSource, REST_URL, REST_ORDER } from './rest.datasource';

@NgModule({

    imports: [
                HttpClientModule,
                HttpClientJsonpModule
             ],

    providers: [
                    ProductRepository,
                    Cart,
                    Order,
                    OrderRepository,
                    // instead of creating an instance of a class with a StaticDataSource constructor, use RestDataSource
                    // { provide: StaticDataSource, useClass: RestDataSource },
                    RestDataSource,
                    { provide: REST_URL, useValue: `http://${location.hostname}:5000/products`, },
                    { provide: REST_ORDER, useValue: `http://${location.hostname}:5000/orders` }
                    // StaticDataSource
                ]
})
export class ModelModule { }
