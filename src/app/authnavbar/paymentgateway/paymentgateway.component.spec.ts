import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgatewayComponent } from './paymentgateway.component';

describe('PaymentgatewayComponent', () => {
  let component: PaymentgatewayComponent;
  let fixture: ComponentFixture<PaymentgatewayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentgatewayComponent]
    });
    fixture = TestBed.createComponent(PaymentgatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
