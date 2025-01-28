import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfTableComponent } from './table.component';

describe('GolfTableComponent', () => {
  let component: GolfTableComponent<any>
  let fixture: ComponentFixture<GolfTableComponent<any>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolfTableComponent],
    });
    fixture = TestBed.createComponent(GolfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
