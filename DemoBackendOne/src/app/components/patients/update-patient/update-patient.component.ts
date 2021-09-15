import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
patientForm:FormGroup;
  constructor(private patientService:PatientService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder) {

   }
id:number;
patient:Patient=new Patient();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(
      data=>{
        this.patient=data;
      },
      error=>console.log(error)
    );
    this.patientForm=this.fb.group({
      patientName:['',Validators.required],
      patientAge:['',[Validators.required,Validators.min(18),Validators.max(100)]],
      patientMobile:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      patientEmail:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      //patientDOB:['',Validators.required],
      patientUserName:['',Validators.required],
      patientPassword:['',Validators.required],
      patientAddress:['',Validators.required]
    });
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

  saveUpdatedPatient(){
    if(this.patientForm.valid){
    this.patientService.updatePatient(this.patient).subscribe(
      data=>{
        alert("patient-updated");
       this.getPatientDetail();
      }
      );
    }
    else{
      this.validateAllFields(this.patientForm);
    }
      }

      getPatientDetail(){
        this.router.navigate(['patient-details',this.id]);
      }
      goBack(){
        this.router.navigate(['patient-details',this.id]);
      }
}
