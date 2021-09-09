import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Appointment } from 'src/app/classes/appointment';
import { Patient } from 'src/app/classes/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient-appointment',
  templateUrl: './create-patient-appointment.component.html',
  styleUrls: ['./create-patient-appointment.component.css']
})
export class CreatePatientAppointmentComponent implements OnInit {
id:number;
appForm:FormGroup;
appoint:Appointment;
currentPatient:Patient;
formatedDate:any;
  constructor(private act:ActivatedRoute,private route:Router,private appService:AppointmentService,
    private fb:FormBuilder,private service:PatientService,private pipe:DatePipe) {
      this.appoint={} as Appointment;
    this.currentPatient={} as Patient;
    this.appForm=this.fb.group({
      dateOfAppointment:['',Validators.required],
      timeOfAppointment:['',Validators.required],
      consultationFee:['',Validators.required]
    });
     }

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.service.getPatientById(this.id).subscribe(data=>{
      this.currentPatient=data;
      console.log(this.currentPatient);
    },error=>console.log(error));
  }
  errorMessage:String;
  createAppointment(app:Appointment){
    this.formatedDate=this.pipe.transform(app.dateOfAppointment, "dd-MMM-yyyy");
app.dateOfAppointment=this.formatedDate;
    app.patient=this.currentPatient;
    this.appService.bookAppointment(app).subscribe(data=>{
      console.log(data);
      this.appoint=data;
      this.route.navigate(["patient-details",this.currentPatient.patientId]);
    },
    error => this.errorMessage = error as any
    );
  }
}
