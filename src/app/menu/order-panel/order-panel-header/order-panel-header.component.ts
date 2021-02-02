import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OrderService } from '@services/order.service';

@Component({
  selector: 'app-order-panel-header',
  templateUrl: './order-panel-header.component.html',
  styleUrls: ['./order-panel-header.component.scss']
})
export class OrderPanelHeaderComponent implements OnInit, OnDestroy {

  /* The number of items currently in the order */
  numOrderItems = 0;

  /* Subscription to update number of items in order */
  numOrderItemsSub: Subscription;

  constructor(private orderService: OrderService) { }

  /* Subscribe to relevant info */
  ngOnInit(): void {

    //Update the number of items in order when changed
    this.numOrderItemsSub = this.orderService.numItemsChanged
      .subscribe((numItems: number) => {
        this.numOrderItems = numItems;
      });
  }

  /* Cleanup subscriptions */
  ngOnDestroy() {
    this.numOrderItemsSub.unsubscribe();
  }

}
