import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
  selector: 'app-chap-order-table',
  templateUrl: './chap-order-table.component.html',
  styleUrls: ['./chap-order-table.component.scss']
})
export class ChapOrderTableComponent implements OnInit {

  includeShipped = false;

  constructor( private repository: OrderRepository ) { }

  ngOnInit() {
  }

  getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

}
