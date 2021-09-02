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

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    CreateDoctorComponent,
    UpdateDoctorComponent,
    DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
