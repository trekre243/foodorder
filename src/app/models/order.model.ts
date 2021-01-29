import { SelectedMenuItem } from './selected-menu-item.model';
import { MenuItem } from './menu-item.model';

/**
 * Class representing a customer's order
 */
export class Order {

    /* Array containing the items of the order */
    private _orderItems: SelectedMenuItem[] = [];

    /* The total price of the order */
    private _price = 0;

    constructor() {}

    /* Returns the number of items in the order */
    get numItems() {
        return this._orderItems.length;
    }

    /* Returns the total price of the order */
    get price() {
        return this._price;
    }

    /* Add a menu item to the order */
    addItem(item: SelectedMenuItem) {
        this._orderItems.push(item);

        this.recalculatePrice();
    }

    /* Returns a copy of the items in the order */
    getItems() {
        return this._orderItems.slice();
    }

    /* Remove an item from the order by index */
    removeItem(index: number) {
        this._orderItems.splice(index, 1);

        this.recalculatePrice();
    }

    /* Clear all items from the order */
    clearOrder() {
        this._orderItems = [];

        this.recalculatePrice();
    }

    /* Updates the price property for current order items */
    private recalculatePrice() {
        let price = 0;

        for(const orderItem of this._orderItems) {
            price += orderItem.price;
            for(const selection of orderItem.selections) {
                for(const option of selection.options) {
                    price += option.priceDifference;
                }
            }
        }

        this._price = price;
    }

}