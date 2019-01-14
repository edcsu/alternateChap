import { Component, OnInit, DoCheck, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-chap-category-count',
  templateUrl: './chap-category-count.component.html',
  styleUrls: ['./chap-category-count.component.scss']
})

export class ChapCategoryCountComponent implements OnInit, DoCheck {

  private differ: KeyValueDiffer<any, any>;

  count: number = 0;

  constructor(
                private repository: ProductRepository,
                private keyValueDiffers: KeyValueDiffers,
                private changeDetector: ChangeDetectorRef
              ) { }

  ngOnInit() {
    this.differ = this.keyValueDiffers
      .find(this.repository.getProducts())
      .create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.repository.getProducts()) != null) {
      this.count = this.repository.getProducts()
        .map(p => p.category)
        .filter((category, index, array) => array.indexOf(category) === index)
        .length;
    }
  }

}
