import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Order } from '../models/order.model';
import { SelectedMenuItem } from './../models/selected-menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  /* An object representing the current order */
  private _order: Order = new Order();

  /* Sends a copy of updated items */
  itemsChanged = new Subject<SelectedMenuItem[]>();

  /* Sends the updated Price */
  priceChanged = new Subject<number>();

  /* Sends the updated number of items */
  numItemsChanged = new Subject<number>();

  constructor() { }

  /* Add an item to the order */
  addItemToOrder(item: SelectedMenuItem) {
    this._order.addItem(item);
    this.updateObservables();
  }

  /* Remove an item from the order by index */
  removeItemFromOrder(index: number) {
    this._order.removeItem(index);
    this.updateObservables();
  }

  /* Clear all the items from the order */
  clearOrder() {
    this._order.clearOrder();
    this.updateObservables();
  }

  /* Updates observables to changes */
  private updateObservables() {
    this.priceChanged.next(this._order.price);
    this.itemsChanged.next(this._order.getItems());
    this.numItemsChanged.next(this._order.numItems);
  }

}
