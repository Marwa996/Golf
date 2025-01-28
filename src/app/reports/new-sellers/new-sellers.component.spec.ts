import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSellersComponent } from './new-sellers.component';

describe('NewSellersComponent', () => {
  let component: NewSellersComponent;
  let fixture: ComponentFixture<NewSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSellersComponent]
    });
    fixture = TestBed.createComponent(NewSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
