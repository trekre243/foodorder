import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPanelHeaderComponent } from './order-panel-header.component';

describe('OrderPanelHeaderComponent', () => {
  let component: OrderPanelHeaderComponent;
  let fixture: ComponentFixture<OrderPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPanelHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
