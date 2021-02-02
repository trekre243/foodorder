import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//all material imports should be done in the material module
import {MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//header component imports
import { HeaderComponent } from './header/header.component';

//menu component contains the menu panel and order panel
import { MenuComponent } from './menu/menu.component';

//menu panel imports
import { MenuPanelComponent } from './menu/menu-panel/menu-panel.component';

//order panel imports
import { OrderPanelComponent } from './menu/order-panel/order-panel.component';
import { OrderPanelHeaderComponent } from './menu/order-panel/order-panel-header/order-panel-header.component';
import { OrderListComponent } from './menu/order-panel/order-list/order-list.component';
import { OrderListEmptyComponent } from './menu/order-panel/order-list/order-list-empty/order-list-empty.component';
import { OrderPanelFooterComponent } from './menu/order-panel/order-panel-footer/order-panel-footer.component';
import { OrderItemComponent } from './menu/order-panel/order-list/order-item/order-item.component';
import { ListSelectionOptions } from './menu/order-panel/order-list/order-item/list-selection-options.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuPanelComponent,
    OrderPanelComponent,
    OrderPanelHeaderComponent,
    OrderListComponent,
    OrderListEmptyComponent,
    OrderPanelFooterComponent,
    OrderItemComponent,
    ListSelectionOptions
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
