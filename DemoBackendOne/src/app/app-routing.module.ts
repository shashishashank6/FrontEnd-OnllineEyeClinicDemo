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
import { UpdatePatientAppointmentComponent } from './components/Appointment/update-patient-appointment/update-patient-appointment.component';
import { AddReportComponent } from './components/report/add-report/add-report.component';
import { UpdateReportComponent } from './components/report/update-report/update-report.component';
import { ReportDetailsComponent } from './components/report/report-details/report-details.component';
import { ReportDataComponent } from './components/report/report-data/report-data.component';
import { ReportListComponent } from './components/report/report-list/report-list.component';
import { ViewReportByTestComponent } from './components/report/view-report-by-test/view-report-by-test.component';
import { CreateReportByTestComponent } from './components/report/create-report-by-test/create-report-by-test.component';
import { ViewReportByPatientComponent } from './components/report/view-report-by-patient/view-report-by-patient.component';
import { PatientLoginComponent } from './components/patients/patient-login/patient-login.component';
import { ViewDoctorAppointmentComponent } from './components/Appointment/view-doctor-appointment/view-doctor-appointment.component';
import { PatientGuardGuard } from './guards/patient-guard.guard';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
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
    redirectTo:'home-page',
    pathMatch:'full'
  },
  {
    path:'admin-list',
    component:AdminListComponent
  },
  {
    path:'home-page',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path:'patient-login',
    component:PatientLoginComponent
  },
  {
    path:"doctor-login",
    component:DoctorLoginComponent
  },
  {
    path:'admin-details/:id',
    component:AdminDetailComponent,
    canActivate:[AdminCanActivateGuardServiceGuard]
  },
  {
    path:'manage-doctors',
    component:DoctorComponent
  },{
    path:'patients-list',
    component:PatientComponent,
    //canActivate:[AdminCanActivateGuardServiceGuard]
  },
  {
    path:'patient-details/:id',
    component:PatientDetailComponent,
   // canActivate:[PatientGuardGuard]
  },
  {
    path:'update-patient/:id',
    component:UpdatePatientComponent,
    //canActivate:[PatientGuardGuard]
 },
 {
   path:'register-patient',
   component:RegisterPatientComponent
 },{
   path:'sample',
   component:SampleComponent
 },{
   path:'test-list',
   component:TestListComponent,
   //canActivate:[AdminCanActivateGuardServiceGuard]
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
   component:UpdateTestComponent,
   //canActivate:[AdminCanActivateGuardServiceGuard]
 },{
   path:'view-appointments-by-patient/:id',
   component:ViewAppointmentsByPatientIdComponent,
   //canActivate:[PatientGuardGuard]
 },{
   path:'create-patient-appointment/:id',
   component:CreatePatientAppointmentComponent,
   //canActivate:[PatientGuardGuard]
 },{
   path:'update-appointment/:id/:pid',
   component:UpdatePatientAppointmentComponent,
   //canActivate:[PatientGuardGuard]
 },
 {
  path:'add-report',
  component:AddReportComponent,
  //canActivate:[AdminCanActivateGuardServiceGuard]
},
{
  path:'update-report/:id',
  component:UpdateReportComponent,
  //canActivate:[AdminCanActivateGuardServiceGuard]
},
{
  path:'report-details/:id',
  component:ReportDetailsComponent
},{
  path:'report-list',
  component:ReportListComponent,
  //canActivate:[AdminCanActivateGuardServiceGuard]
},
{
  path:'report-list/:id',
  component:ReportListComponent,
},
{
  path:'view-test-report/:id/:doctorId',
  component:ViewReportByTestComponent
},{
  path:'add-report-by-test/:id',
  component:CreateReportByTestComponent,
  //canActivate:[AdminCanActivateGuardServiceGuard]
},{
  path:'view-report-by-patient/:id',
  component:ViewReportByPatientComponent,
  //canActivate:[PatientGuardGuard]
},{
  path:'view-appointment-by-doctor/:id',
  component:ViewDoctorAppointmentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
