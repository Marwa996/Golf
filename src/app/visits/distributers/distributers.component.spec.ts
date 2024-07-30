import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributersComponent } from './distributers.component';

describe('DistributersComponent', () => {
  let component: DistributersComponent;
  let fixture: ComponentFixture<DistributersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistributersComponent]
    });
    fixture = TestBed.createComponent(DistributersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
