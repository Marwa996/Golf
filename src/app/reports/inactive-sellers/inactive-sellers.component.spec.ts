import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveSellersComponent } from './inactive-sellers.component';

describe('InactiveSellersComponent', () => {
  let component: InactiveSellersComponent;
  let fixture: ComponentFixture<InactiveSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveSellersComponent]
    });
    fixture = TestBed.createComponent(InactiveSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
