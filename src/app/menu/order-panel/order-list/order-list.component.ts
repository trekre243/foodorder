import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { OrderItem } from '@models/order-item.model';
import { OrderService } from '@services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  /* Array of the menu items selected */
  orderItems: OrderItem[];

  /* Subscription to the menu items Subject */
  orderItemsSub: Subscription;

  constructor(private orderService: OrderService) { }

  /* Subscribe to relevant observables */
  ngOnInit(): void {

    // Get an initial copy of the order items
    this.orderItems = this.orderService.getItems();

    // Update the order items whenever there is a change
    this.orderItemsSub = this.orderService.itemsChanged
      .subscribe((items: OrderItem[]) => {
        this.orderItems = items;
      });

  }

  /* Unsubscribe from relevant observables */
  ngOnDestroy() {
    this.orderItemsSub.unsubscribe();
  }

}
