import { OrderItem } from './order-item.model';

/**
 * Class representing a customer's order
 */
export class Order {

    /* Array containing the items of the order */
    private _orderItems: OrderItem[] = [];

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
    addItem(item: OrderItem) {
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
            price += orderItem.getTotalPrice();
        }

        this._price = price;
    }

}