import { MenuItem } from './menu-item.model';

/**
 * Represents a menu category
 */
export class MenuCategory {

    constructor(
        /* The name of the category */
        public categoryName: string,

        /* The menu items that belong to the category */
        public menuItems: MenuItem[] = []
    ) {}
    
    /* Adds a menu item to the category */
    addMenuItem(item: MenuItem) {
        this.menuItems.push(item);
    }

    /* Returns a copy of the menu items */
    getMenuItems() {
        return this.menuItems.slice();
    }

    /* Remove a menu item from the category by index */
    removeMenuItem(index: number) {
        this.menuItems.slice(index, 1);
    }

}