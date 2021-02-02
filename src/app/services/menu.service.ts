import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Menu } from '@models/menu.model';
import { MenuCategory } from '@models/menu-category.model';
import { MenuItem } from '@models/menu-item.model';
import { MenuItemSelection } from '@models/menu-item-selection.model';
import { Option } from '@models/option.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  /* Current copy of the menu */
  private _menu: Menu;

  /* Subject for any changes to the menu (out of item probably. dunno yet) */
  menuChanged = new Subject<Menu>();

  constructor() {
    //TODO: obtain an actual menu from the firestore
    this._menu = new Menu();

    //appetizers
    let appetizers = new MenuCategory("Appetizers");

    let mozzarellaSticks = new MenuItem("Mozzarella Sticks", 8.5);
    appetizers.addMenuItem(mozzarellaSticks);

    let potatoSkins = new MenuItem("Potato Skins", 9.25);
    appetizers.addMenuItem(potatoSkins);

    let chipsAndSalsa = new MenuItem("Chips and Salsa", 6.2);
    appetizers.addMenuItem(chipsAndSalsa);

    let bloomingOnion = new MenuItem("Blooming Onion", 8);
    appetizers.addMenuItem(bloomingOnion);

    this._menu.addMenuCategory(appetizers);

    //Burgers
    let burgers = new MenuCategory("Burgers");

    let bunSelection = new MenuItemSelection("Buns", 1);
    bunSelection.addOption(new Option("no bun"));
    bunSelection.addOption(new Option("normal"));
    bunSelection.addOption(new Option("gluten free", 2));

    let toppingsSelection = new MenuItemSelection("Toppings", null);
    toppingsSelection.addOption(new Option("Onions"));
    toppingsSelection.addOption(new Option("Tomatoes"));
    toppingsSelection.addOption(new Option("Grilled Onions"));
    toppingsSelection.addOption(new Option("Grilled Peppers"));
    toppingsSelection.addOption(new Option("Avocado", 3));
    toppingsSelection.addOption(new Option("Egg", 2));
    toppingsSelection.addOption(new Option("Extra Cheese"));
    toppingsSelection.addOption(new Option("Extra Pickles"));
    toppingsSelection.addOption(new Option("Extra patty",3));

    let cheeseBurger = new MenuItem("Cheese Burger", 11.25);
    cheeseBurger.addSelection(bunSelection);
    cheeseBurger.addSelection(toppingsSelection);
    burgers.addMenuItem(cheeseBurger);

    let rodeoBurger = new MenuItem("Rodeo Burger", 12.2);
    rodeoBurger.addSelection(bunSelection);
    rodeoBurger.addSelection(toppingsSelection);
    burgers.addMenuItem(rodeoBurger);

    let baconDouble = new MenuItem("baconDouble", 13);
    baconDouble.addSelection(bunSelection);
    baconDouble.addSelection(toppingsSelection);
    burgers.addMenuItem(baconDouble);

    this._menu.addMenuCategory(burgers);

    //desserts
    let desserts = new MenuCategory("Desserts");
    this._menu.addMenuCategory(desserts);

  }

  /* Returns a copy of the menu */
  getMenu() {
    return this._menu;
  }

}
