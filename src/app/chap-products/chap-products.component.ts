import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export interface Section {
  name: string;
  status: string;
  card_icon: string;
  card_color: string;
}

@Component({
  selector: 'app-chap-products',
  templateUrl: './chap-products.component.html',
  styleUrls: ['./chap-products.component.scss']
})

export class ChapProductsComponent implements OnInit {

  details: Section[] = [
    {
      name: 'Last 24 Hours',
      status: '290 new retailers',
      card_icon: 'person_add',
      card_color: 'primary'
    },
    {
      name: 'Awaiting Process',
      status: '234 orders',
      card_icon: 'sync',
      card_color: 'primary'
    },
    {
      name: 'On hold',
      status: '120 orders',
      card_icon: 'timer',
      card_color: 'accent'
    },
    {
      name: 'Low in Stock',
      status: '490 orders',
      card_icon: 'error',
      card_color: 'primary'
    },
    {
      name: 'Out of Stock',
      status: '42 items',
      card_icon: 'cancel',
      card_color: 'warn'
    }
  ];

  constructor(
                private repository: ProductRepository,
                private breakpointObserver: BreakpointObserver,
                private http: HttpClient,
                /*, private state: SharedState*/
              ) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  getProduct(key: number): Product {
    return this.repository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(key: number) {
    this.repository.deleteProduct(key);
  }

  /*editProduct(key: number) {
    this.state.id = key;
     this.state.mode = MODES.EDIT;
  }
  createProduct() {
    this.state.id = undefined;
    // this.state.mode = MODES.CREATE;
  }
  */

  ngOnInit() {
    this.http.get(' http://localhost:5000/orders').subscribe(json => console.log(json));
  }

}
