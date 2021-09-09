import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientAppointmentComponent } from './create-patient-appointment.component';

describe('CreatePatientAppointmentComponent', () => {
  let component: CreatePatientAppointmentComponent;
  let fixture: ComponentFixture<CreatePatientAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePatientAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
