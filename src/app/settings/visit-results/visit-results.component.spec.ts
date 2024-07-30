import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitResultsComponent } from './visit-results.component';

describe('VisitResultsComponent', () => {
  let component: VisitResultsComponent;
  let fixture: ComponentFixture<VisitResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitResultsComponent]
    });
    fixture = TestBed.createComponent(VisitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
