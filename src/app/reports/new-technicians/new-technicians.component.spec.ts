import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechniciansComponent } from './new-technicians.component';

describe('NewTechniciansComponent', () => {
  let component: NewTechniciansComponent;
  let fixture: ComponentFixture<NewTechniciansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTechniciansComponent]
    });
    fixture = TestBed.createComponent(NewTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
