import { Component, Input, OnInit } from '@angular/core';

import { OrderService } from '@services/order.service';
import { OrderItem } from '@models/order-item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  /* The relevant order item to be shown */
  @Input() orderItem: OrderItem;

  /* The index of the order item to be used for deletion and editing */
  @Input() itemIndex: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  /* Edit the current order item */
  //TODO: Add editing an order
  editItem() {
    console.log('Editing item not yet created');
  }

  /* Delete this item from the order */
  removeItem() {
    this.orderService.removeItemFromOrder(this.itemIndex);
  }

}
