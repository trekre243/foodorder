import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { MenuService } from '@services/menu.service';
import { Menu } from '@models/menu.model';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit, OnDestroy {

  /* A copy of the restaurants menu */
  menu: Menu;

  /* A subscription to the menu subject */
  menuSub: Subscription;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {

    // Grab the current menu
    this.menu = this.menuService.getMenu();

    // Change the menu if any changes are made
    this.menuSub = this.menuService.menuChanged
      .subscribe((menu: Menu) => {
        this.menu = menu;
      });

  }

  ngOnDestroy() {
    this.menuSub.unsubscribe();
  }

}
