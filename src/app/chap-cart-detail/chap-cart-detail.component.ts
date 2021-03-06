import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-chap-cart-detail',
  templateUrl: './chap-cart-detail.component.html',
  styleUrls: ['./chap-cart-detail.component.scss']
})
export class ChapCartDetailComponent implements OnInit {

  constructor(
                  public cart: Cart,
                  private datas: RestDataSource
              )  { }

  ngOnInit() {
    console.log(this.datas.getData());
  }

}
