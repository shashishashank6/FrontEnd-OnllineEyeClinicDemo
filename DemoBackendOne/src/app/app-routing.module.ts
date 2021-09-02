import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';

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
    redirectTo:'doctors',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
