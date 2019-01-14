import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chap-inventory',
  templateUrl: './chap-inventory.component.html',
  styleUrls: ['./chap-inventory.component.scss']
})
export class ChapInventoryComponent implements OnInit {

  category: string = null;

  constructor(
                private repository: ProductRepository,
                activeRoute: ActivatedRoute
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

  ngOnInit() {
  }

}
