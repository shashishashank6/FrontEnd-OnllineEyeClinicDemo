import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorService } from './services/doctor.service';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminService } from './services/admin.service';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminDetailComponent } from './components/admin/admin-detail/admin-detail.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { PatientService } from './services/patient.service';
import { PatientDetailComponent } from './components/patients/patient-detail/patient-detail.component';
import { UpdatePatientComponent } from './components/patients/update-patient/update-patient.component';
import { RegisterPatientComponent } from './components/patients/register-patient/register-patient.component';
import { SampleComponent } from './sample/sample.component';
import { DatePipe } from '@angular/common';
import { TestListComponent } from './components/Test/test-list/test-list.component';
import { TestDetailsComponent } from './components/Test/test-details/test-details.component';
import { CreateTestComponent } from './components/Test/create-test/create-test.component';
import { CreateDoctorTestComponent } from './components/Test/create-doctor-test/create-doctor-test.component';
import { ViewTestByDoctorIdComponent } from './components/Test/view-test-by-doctor-id/view-test-by-doctor-id.component';
import { UpdateTestComponent } from './components/Test/update-test/update-test.component';
import { AppointmentListComponent } from './components/Appointment/appointment-list/appointment-list.component';
import { TestService } from './services/test.service';
import { AppointmentService } from './services/appointment.service';
import { ViewAppointmentsByPatientIdComponent } from './components/Appointment/view-appointments-by-patient-id/view-appointments-by-patient-id.component';
import { CreatePatientAppointmentComponent } from './components/Appointment/create-patient-appointment/create-patient-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    CreateDoctorComponent,
    UpdateDoctorComponent,
    DoctorDetailsComponent,
    AdminListComponent,
    LoginComponent,
    AdminDetailComponent,
    PatientComponent,
    PatientDetailComponent,
    UpdatePatientComponent,
    RegisterPatientComponent,
    SampleComponent,
    TestListComponent,
    TestDetailsComponent,
    CreateTestComponent,
    CreateDoctorTestComponent,
    ViewTestByDoctorIdComponent,
    UpdateTestComponent,
    AppointmentListComponent,
    ViewAppointmentsByPatientIdComponent,
    CreatePatientAppointmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [DoctorService,AdminService,PatientService,DatePipe,TestService,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
