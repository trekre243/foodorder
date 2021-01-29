import { Injectable } from '@angular/core';

import { Menu } from './../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

private menu: Menu;

  constructor() { }

  getMenuItems() {

  }

}
