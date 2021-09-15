import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { Test } from 'src/app/classes/test';
import { DoctorService } from 'src/app/services/doctor.service';
import { TestService } from 'src/app/services/test.service';
import { DoctorComponent } from '../../doctor/doctor.component';
import { CreateTestComponent } from '../create-test/create-test.component';

@Component({
  selector: 'app-create-doctor-test',
  templateUrl: './create-doctor-test.component.html',
  styleUrls: ['./create-doctor-test.component.css']
})
export class CreateDoctorTestComponent implements OnInit {
//test:Test;
//currentDoctor:Doctor;
id:number;
testForm:FormGroup;
test:Test;
currentDoctor:Doctor;
  constructor(private act:ActivatedRoute,private route:Router,private testService:TestService,
    private fb:FormBuilder,private service:DoctorService
    ) { 
   this.test={} as Test;
    this.currentDoctor={} as Doctor;
    this.testForm=fb.group({
      testName:['',Validators.required],
      testDescription:['',Validators.required],
      doctor:[''],
      testId:['']
    });
  }

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.service.getDoctorById(this.id).subscribe(
      data=>{
        this.currentDoctor=data;
     //   console.log(this.currentDoctor);
      },
      error=>console.log(error)
    );
  }
  errorMessage:String;
  createTest(test:Test){
    if (this.testForm.valid) {
    test.doctor=this.currentDoctor;
   // console.log(this.currentDoctor);
    //test.doctorId=this.currentDoctor.doctorId;
   // console.log(test.doctor);
 //  console.log(test.doctor);
    this.testService.createTest(test).subscribe(data=>{
      console.log(data);
      this.test=data;
      this.route.navigate(["doctor-details",this.currentDoctor.doctorId]);
    },
    error => this.errorMessage = error as any);
  }
  else{
    this.validateAllFields(this.testForm);
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
    this.route.navigate(["doctor-details",this.currentDoctor.doctorId]);
  }
}
