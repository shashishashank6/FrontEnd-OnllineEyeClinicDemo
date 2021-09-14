import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientAppointmentComponent } from './update-patient-appointment.component';

describe('UpdatePatientAppointmentComponent', () => {
  let component: UpdatePatientAppointmentComponent;
  let fixture: ComponentFixture<UpdatePatientAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
