import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitTypesComponent } from './visit-types.component';

describe('VisitTypesComponent', () => {
  let component: VisitTypesComponent;
  let fixture: ComponentFixture<VisitTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitTypesComponent]
    });
    fixture = TestBed.createComponent(VisitTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
