import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPanelFooterComponent } from './order-panel-footer.component';

describe('OrderPanelFooterComponent', () => {
  let component: OrderPanelFooterComponent;
  let fixture: ComponentFixture<OrderPanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPanelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
