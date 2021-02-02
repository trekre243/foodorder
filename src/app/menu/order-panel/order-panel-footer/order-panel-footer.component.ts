import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OrderService } from '@services/order.service';

//DELETE ME. For Testing
import { OrderItem } from '@models/order-item.model';
import { OrderItemSelection } from '@models/order-item-selection.model';
import { Option } from '@models/option.model';

@Component({
  selector: 'app-order-panel-footer',
  templateUrl: './order-panel-footer.component.html',
  styleUrls: ['./order-panel-footer.component.scss']
})
export class OrderPanelFooterComponent implements OnInit, OnDestroy {

  /* The price of the current order */
  orderPrice = 0;

  /* Subscription to the current price */
  orderPriceSub: Subscription;

  constructor(private orderService: OrderService) { }


  /* Subscribe to relevant observables */
  ngOnInit(): void {
    this.orderPriceSub = this.orderService.priceChanged
      .subscribe((price: number) => {
        this.orderPrice = price;
      })
  }

  /* Proceed to checkout */
  //TODO: Add checkout redirect once checkout is made
  checkout() {
    console.log('Proceed to checkout not made yet')

    let cheeseBurger = new OrderItem("Cheeseburger", 10.23);

    let bunSelection = new OrderItemSelection("bun");
    bunSelection.addOption(new Option("Gluten Free", 2));
    cheeseBurger.addSelection(bunSelection);

    let toppingSelection = new OrderItemSelection("Toppings");
    toppingSelection.addOption(new Option("bacon", 1));
    toppingSelection.addOption(new Option("grilled onions"));
    toppingSelection.addOption(new Option("mushrooms"));
    toppingSelection.addOption(new Option("egg", 2));
    cheeseBurger.addSelection(toppingSelection);

    this.orderService.addItemToOrder(cheeseBurger);
  }

  /* Remove all the items from the order */
  clearOrder() {
    this.orderService.clearOrder();
  }

  /* Unsubscribe from relevant observables */
  ngOnDestroy() {
    this.orderPriceSub.unsubscribe();
  }

}
