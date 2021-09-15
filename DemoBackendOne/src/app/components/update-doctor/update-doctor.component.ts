import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  doctor:Doctor=new Doctor();
  id:number;
  doctorForm:FormGroup;
  constructor(private serviceUpdate:DoctorService,private route:ActivatedRoute,private routeGet:Router,private fb:FormBuilder) {
    this.doctorForm=this.fb.group({
  doctorName:['',Validators.required],
 doctorConsultationTime:['',Validators.required],
 mobile:['',[Validators.required,Validators.required,Validators.pattern("[0-9]{10}")]],
 email:['',Validators.required],
 doctorUserName:[''],
 address:['',Validators.required]
    });
   }

  ngOnInit(): void {
    //getting id from route
    this.id=this.route.snapshot.params['id'];
    this.serviceUpdate.getDoctorById(this.id).subscribe(
      data=>{
        this.doctor=data;
      },
      error=>console.log(error)
    );
  }
  saveUpdatedDoctor(){
    if(this.doctorForm.valid){
    this.serviceUpdate.updateDoctor(this.doctor).subscribe(
      data=>{
        alert("doctor updated");
       this.getDoctorsList();
      }
      );
    }
    else{
      this.validateAllFields(this.doctorForm);
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
      getDoctorsList(){
        this.routeGet.navigate(['doctors']);
      }
      goBack(){
        this.routeGet.navigate(['doctors']);
      }
}
