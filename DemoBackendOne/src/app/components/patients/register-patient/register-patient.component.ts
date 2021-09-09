import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  patient:Patient=new Patient();
  patientForm:FormGroup;
  constructor(private patientService:PatientService,private router:Router,private fb:FormBuilder,private pipe:DatePipe) { }
formatedDate:any;
  ngOnInit(): void {
    this.patientForm=this.fb.group({
      patientName:['',Validators.required],
      patientAge:['',Validators.required],
      patientMobile:['',Validators.required],
      patientEmail:['',Validators.required],
      patientDOB:['',Validators.required/*,this.pipe.transform(this.date, "dd-MMM-yyyy")*/],
      patientUserName:['',Validators.required],
      patientPassword:['',Validators.required],
      patientAddress:['',Validators.required]
    });
    
  }
savePatient(){
this.formatedDate=this.pipe.transform(this.patient.patientDOB, "dd-MMM-yyyy");
this.patient.patientDOB=this.formatedDate;
  if (this.patientForm.valid) {
    this.patientService.createPatient(this.patient).subscribe(data=>{
      this.goToPatientsList();
    },
    error=>console.error()
    );
  }
  else{
    this.validateAllFields(this.patientForm);
  }
  console.log(this.patient);
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
goToPatientsList(){
  this.router.navigate(['/patients-list']);
}
}
