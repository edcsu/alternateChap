import { Component, OnInit, DoCheck, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef} from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chap-product-count',
  templateUrl: './chap-product-count.component.html',
  styleUrls: ['./chap-product-count.component.scss']
})
export class ChapProductCountComponent implements OnInit, DoCheck {

  private differ: KeyValueDiffer<any, any>;

  // tslint:disable-next-line:no-inferrable-types
  count: number = 0;
  private category: string;

  constructor(private repository: ProductRepository,
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef,
    activeRoute: ActivatedRoute) {
    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
      if (params['category'] != null) {
        this.category = params['category'];
        this.updateCount();
      }
    }));
     }

    ngOnInit() {
    this.differ = this.keyValueDiffers
      .find(this.repository.getProducts())
      .create();
  }

    ngDoCheck() {
    if (this.differ.diff(this.repository.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.repository.getProducts()
      .filter(p => this.category == null || p.category === this.category)
      .length;
  }

}
