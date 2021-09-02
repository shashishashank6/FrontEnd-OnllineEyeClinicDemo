import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { DoctorComponent } from '../doctor/doctor.component';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {


doctor:Doctor=new Doctor();
form=new FormGroup({
 doctorname:new FormControl('',Validators.required),
 doctorConsultationTime:new FormControl('',Validators.required),
 mobile:new FormControl('',Validators.required),
 email:new FormControl('',Validators.required),
 username:new FormControl('',Validators.required),
 password:new FormControl('',Validators.required),
 address:new FormControl('',Validators.required)

});

  constructor(private createDoctor:DoctorService,private router:Router) { 
    
    
  }
  ngOnInit(): void {

  }
saveDoctor(){
  if (this.form.valid) {
  this.createDoctor.createDoctor(this.doctor).subscribe(data=>{
    this.goToDoctorsList();
  },
  error=>console.error()
  );
}
else{
  this.validateAllFields(this.form);
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
goToDoctorsList(){
  this.router.navigate(['/doctors']);
}
}
