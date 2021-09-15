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
      patientAge:['',[Validators.required,Validators.min(18),Validators.max(100)]],
      patientMobile:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      patientEmail:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
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
      alert("registered");
      this.router.navigate(['patient-login']);
    },
    error=>alert("user name already taken")
    );
  }
  else{
    this.validateAllFields(this.patientForm);
  }
 // console.log(this.patient);
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
goback(){
  this.router.navigate(['patient-login']);
}
}
