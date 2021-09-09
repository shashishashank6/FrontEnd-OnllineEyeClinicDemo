import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentsByPatientIdComponent } from './view-appointments-by-patient-id.component';

describe('ViewAppointmentsByPatientIdComponent', () => {
  let component: ViewAppointmentsByPatientIdComponent;
  let fixture: ComponentFixture<ViewAppointmentsByPatientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentsByPatientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentsByPatientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
