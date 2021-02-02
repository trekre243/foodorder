import { OrderItemSelection } from './order-item-selection.model';

/**
 * A class representing a menu item that can be
 * added to an order
 */
export class OrderItem {

    constructor(
        /* The name of the menu item (eg. Potato Skins) */
        public itemName: string,

        /* The price of the item */
        public basePrice: number,

        /* An array containing each selection that
        need to be made for made for item
        (eg. beef patty, veggie patty, bison patty)  */
        public selections: OrderItemSelection[] = []

    ) {}

    /* Add a selection to the order */
    addSelection(selection: OrderItemSelection) {
        this.selections.push(selection);
    }

    /* Returns the total price including option changes */
    getTotalPrice() {

        let optionDifference = 0;
        for(let selection of this.selections) {
            for(let option of selection.options) {
                optionDifference += option.priceDifference;
            }
        }

        return this.basePrice + optionDifference;
    }

}