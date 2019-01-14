import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-chap-order',
  templateUrl: './chap-order.component.html',
  styleUrls: ['./chap-order.component.scss']
})
export class ChapOrderComponent implements OnInit {

  category: string = null;

  constructor(
                private repository: ProductRepository,
                activeRoute: ActivatedRoute,
                private router: Router,
                public cart: Cart
              ) {
                  activeRoute.params.subscribe(params => {
                    this.category = params['category'] || null;
                  });
                }

  getProduct(key: number): Product {
    return this.repository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.repository.getProducts()
      .filter(p => this.category == null || p.category === this.category);
  }

  get categories(): string[] {
    return this.repository.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) === index);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cartdetail');
  }

  ngOnInit() {
  }

}
