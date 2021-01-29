import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListEmptyComponent } from './order-list-empty.component';

describe('OrderListEmptyComponent', () => {
  let component: OrderListEmptyComponent;
  let fixture: ComponentFixture<OrderListEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
