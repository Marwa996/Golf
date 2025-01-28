import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveTechniciansComponent } from './inactive-technicians.component';

describe('InactiveTechniciansComponent', () => {
  let component: InactiveTechniciansComponent;
  let fixture: ComponentFixture<InactiveTechniciansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveTechniciansComponent]
    });
    fixture = TestBed.createComponent(InactiveTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
