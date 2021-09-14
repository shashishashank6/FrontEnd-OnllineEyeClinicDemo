import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorAppointmentComponent } from './view-doctor-appointment.component';

describe('ViewDoctorAppointmentComponent', () => {
  let component: ViewDoctorAppointmentComponent;
  let fixture: ComponentFixture<ViewDoctorAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
