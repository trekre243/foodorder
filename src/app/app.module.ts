import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuPanelComponent } from './menu/menu-panel/menu-panel.component';
import { OrderPanelComponent } from './menu/order-panel/order-panel.component';
import { OrderPanelHeaderComponent } from './menu/order-panel/order-panel-header/order-panel-header.component';
import { OrderListComponent } from './menu/order-panel/order-list/order-list.component';
import { OrderListEmptyComponent } from './menu/order-panel/order-list-empty/order-list-empty.component';
import { OrderPanelFooterComponent } from './menu/order-panel/order-panel-footer/order-panel-footer.component';

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
    OrderPanelFooterComponent
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
