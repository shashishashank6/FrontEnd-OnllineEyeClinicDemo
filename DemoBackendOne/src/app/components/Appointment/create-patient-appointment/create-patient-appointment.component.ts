import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, MinValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Appointment } from 'src/app/classes/appointment';
import { Doctor } from 'src/app/classes/doctor';
import { Patient } from 'src/app/classes/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
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
doctor:Doctor[];
  constructor(private act:ActivatedRoute,private route:Router,private appService:AppointmentService,
    private fb:FormBuilder,private service:PatientService,private pipe:DatePipe,private doctorService:DoctorService) {
      this.appoint={} as Appointment;
    this.currentPatient={} as Patient;
    this.appForm=this.fb.group({
      dateOfAppointment:['',Validators.required],
      timeOfAppointment:['',Validators.required],
      consultationFee:['',[Validators.required,Validators.min(500)]],
      doctorId:['',[Validators.required,Validators.min(1)]]
    });
     }

  ngOnInit(): void {
    this.appoint['doctor']={} as Doctor;
    this.id=this.act.snapshot.params['id'];
    this.service.getPatientById(this.id).subscribe(data=>{
      this.currentPatient=data;
      console.log(this.currentPatient);
    },error=>console.log(error));
    this.doctorService.getDoctorsList().subscribe(data=>{
      this.doctor=data;
    });
  }
  errorMessage:String;
  createAppointment(app:Appointment){
    if (this.appForm.valid) {
    app['doctor']={} as Doctor;
    app['doctor']['doctorId']={} as number;
    app['doctor']['doctorId']=this.appForm.controls.doctorId.value;
    this.formatedDate=this.pipe.transform(app.dateOfAppointment, "dd-MMM-yyyy");
app.dateOfAppointment=this.formatedDate;
    app.patient=this.currentPatient;
    this.appService.bookAppointment(app).subscribe(data=>{
      alert("appointment booked");
      this.appoint=data;
      //console.log(data);
      //this.route.navigate(["patient-details",this.currentPatient.patientId]);
    },
    error=>alert("doctor doesnot exist")
    );
  }else{
    this.validateAllFields(this.appForm);
  }
  }
  validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {             
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
            this.validateAllFields(control);  
        }
    });
  }
  goBack(){
    this.route.navigate(["patient-details",this.currentPatient.patientId]);
  }
}
