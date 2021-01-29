import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-panel-header',
  templateUrl: './order-panel-header.component.html',
  styleUrls: ['./order-panel-header.component.scss']
})
export class OrderPanelHeaderComponent implements OnInit {

  orderItemCount = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
