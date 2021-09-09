import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailComponent } from './components/admin/admin-detail/admin-detail.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { LoginComponent } from './components/admin/login/login.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientDetailComponent } from './components/patients/patient-detail/patient-detail.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { RegisterPatientComponent } from './components/patients/register-patient/register-patient.component';
import { UpdatePatientComponent } from './components/patients/update-patient/update-patient.component';
import { CreateDoctorTestComponent } from './components/Test/create-doctor-test/create-doctor-test.component';
import { CreateTestComponent } from './components/Test/create-test/create-test.component';
import { TestListComponent } from './components/Test/test-list/test-list.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { AdminCanActivateGuardServiceGuard } from './guards/admin-can-activate-guard-service.guard';
import { SampleComponent } from './sample/sample.component';
import { ViewTestByDoctorIdComponent } from './components/Test/view-test-by-doctor-id/view-test-by-doctor-id.component';
import { UpdateTestComponent } from './components/Test/update-test/update-test.component';
import { ViewAppointmentsByPatientIdComponent } from './components/Appointment/view-appointments-by-patient-id/view-appointments-by-patient-id.component';
import { CreatePatientAppointmentComponent } from './components/Appointment/create-patient-appointment/create-patient-appointment.component';
const routes: Routes = [
  {
    path:'doctors',
    component:DoctorComponent
  },
  {
     path:'create-doctor',
     component:CreateDoctorComponent
  },
  {
     path:'update-doctor/:id',
     component:UpdateDoctorComponent
  },
  {
     path:'doctor-details/:id',
     component:DoctorDetailsComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'admin-list',
    component:AdminListComponent
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path:'admin-details/:id',
    component:AdminDetailComponent,
    canActivate:[AdminCanActivateGuardServiceGuard]
  },
  {
    path:'manage-doctors',
    component:DoctorComponent
  },{
    path:'patients-list',
    component:PatientComponent
  },
  {
    path:'patient-details/:id',
    component:PatientDetailComponent
  },
  {
    path:'update-patient/:id',
    component:UpdatePatientComponent
 },
 {
   path:'register-patient',
   component:RegisterPatientComponent
 },{
   path:'sample',
   component:SampleComponent
 },{
   path:'test-list',
   component:TestListComponent
 },{
   path:'create-test-doctor/:id',
   component:CreateDoctorTestComponent
 }
 ,{
   path:'view-prescribed-tests/:id',
   component:ViewTestByDoctorIdComponent
 },
 {
   path:"update-test/:id",
   component:UpdateTestComponent
 },{
   path:'view-appointments-by-patient/:id',
   component:ViewAppointmentsByPatientIdComponent
 },{
   path:'create-patient-appointment/:id',
   component:CreatePatientAppointmentComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
