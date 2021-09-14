import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/classes/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-update-patient-appointment',
  templateUrl: './update-patient-appointment.component.html',
  styleUrls: ['./update-patient-appointment.component.css']
})
export class UpdatePatientAppointmentComponent implements OnInit {
id:number;
appoint:Appointment=new Appointment();
appointForm:FormGroup;
formatedDate:any;
  constructor(private act:ActivatedRoute,private service:AppointmentService,private route:Router,private fb:FormBuilder,
    private pipe:DatePipe) 
  {
    this.appointForm=this.fb.group({

      dateOfAppointment:['',Validators.required],
      timeOfAppointment:['',Validators.required],
      consultationFee:['',Validators.required]
    });
   }
pid:number;
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.pid=this.act.snapshot.params['pid'];
    console.log(this.pid);
    this.service.getAppointmentById(this.id).subscribe(data=>{
      this.appoint=data;
      //console.log(this.appoint);
    });
  }

updateAppointment(){
  if (this.appointForm.valid) {
  this.formatedDate=this.pipe.transform(this.appoint.dateOfAppointment, "dd-MMM-yyyy");
  this.appoint.dateOfAppointment=this.formatedDate;
  this.service.updateAppointment(this.appoint).subscribe(data=>{
    alert("appointment updated");
    this.goBack();
  });
}else{
  this.validateAllFields(this.appointForm);
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
  this.route.navigate(['view-appointments-by-patient',this.pid]);
}
}
