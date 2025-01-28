import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceManagersComponent } from './customer-service-managers.component';

describe('CustomerServiceManagersComponent', () => {
  let component: CustomerServiceManagersComponent;
  let fixture: ComponentFixture<CustomerServiceManagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerServiceManagersComponent]
    });
    fixture = TestBed.createComponent(CustomerServiceManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
