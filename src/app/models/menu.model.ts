import { MenuCategory } from './menu-category.model';

/**
 * Class representing a menu
 */
export class Menu {

    constructor(
        /* An array of the categories containing menu items */
        public categories: MenuCategory[] = []
        
    ) {}

    /* Add a category to the menu */
    addMenuCategory(category: MenuCategory) {
        this.categories.push(category);
    }

}