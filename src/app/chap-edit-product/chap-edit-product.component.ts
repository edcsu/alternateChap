import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-chap-edit-product',
  templateUrl: './chap-edit-product.component.html',
  styleUrls: ['./chap-edit-product.component.scss']
})
export class ChapEditProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {

    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    const id = activeRoute.snapshot.params['id'];
    if (id != null) {
      const name = activeRoute.snapshot.params['name'];
      const category = activeRoute.snapshot.params['category'];
      const price = activeRoute.snapshot.params['price'];
      const units = activeRoute.snapshot.params['units'];
      if (name != null && category != null && price != null && units != null) {
        this.product.id = id;
        this.product.name = name;
        this.product.category = category;
        this.product.price = Number.parseFloat(price);
        this.product.units = Number.parseInt(units);
      } else {
        Object.assign(this.product, repository.getProduct(id) || new Product());
      }
    }

  }

  // tslint:disable-next-line:no-inferrable-types
  editing: boolean = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.repository.saveProduct(this.product);
      this.router.navigateByUrl('/products');
    }
  }

  resetForm() {
    this.product = new Product();
  }

  ngOnInit() {
  }

}
