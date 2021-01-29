import { SelectedMenuItemSelection } from './selected-menu-item-selection.model';

/**
 * A class representing a menu item that can be
 * added to an order
 */
export class SelectedMenuItem {

    constructor(
        /* The name of the menu item (eg. Potato Skins) */
        public itemName: string,

        /* The price of the item */
        public price: number,

        /* An array containing each selection that
        need to be made for made for item
        (eg. beef patty, veggie patty, bison patty)  */
        public selections: SelectedMenuItemSelection[] = []

    ) {}


}