import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesPriceListsComponent } from './companies-price-lists.component';

describe('CompaniesPriceListsComponent', () => {
  let component: CompaniesPriceListsComponent;
  let fixture: ComponentFixture<CompaniesPriceListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesPriceListsComponent]
    });
    fixture = TestBed.createComponent(CompaniesPriceListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
