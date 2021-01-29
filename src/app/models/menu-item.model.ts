import { MenuItemSelection } from './menu-item-selection.model';

/**
 * An class for a single item on the menu
 */
export class MenuItem {

    constructor(
        /* The name of the menu item (eg. Potato Skins) */
        public itemName: string,

        /* The price of the item */
        public price: number,

        /* An array containing each selection that
        need to be made for made for item
        (eg. beef patty, veggie patty, bison patty)  */
        public selections: MenuItemSelection[] = []

    ) {}
}