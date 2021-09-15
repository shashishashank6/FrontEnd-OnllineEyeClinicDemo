import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { Report } from 'src/app/classes/report';
import { Test } from 'src/app/classes/test';
import { PatientService } from 'src/app/services/patient.service';
import { ReportService } from 'src/app/services/report.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-create-report-by-test',
  templateUrl: './create-report-by-test.component.html',
  styleUrls: ['./create-report-by-test.component.css']
})
export class CreateReportByTestComponent implements OnInit {
id:number;
form:FormGroup;
patient:Patient[];
report:Report;
currentTest:Test;
errorMessage:string;
  constructor(private act:ActivatedRoute,private service:ReportService,private fb:FormBuilder,private testService:TestService,
    private pipe:DatePipe,private route:Router,private patientService:PatientService
    ) {
      this.report={} as Report;
    this.currentTest={} as Test;
    this.form=this.fb.group({
      dateOfReport:[''],
  description:['',Validators.required],
  visualAcuity:['',Validators.required],
  visualAcuityForNear:['',Validators.required],
  visualAcuityForDistance:['',Validators.required],
  patientId:['',[Validators.required,Validators.min(1)]]
    });
   }

  ngOnInit(): void {
    this.report['patient']={} as Patient;
    this.id=this.act.snapshot.params['id'];
    this.testService.getTestById(this.id).subscribe(data=>{
      this.currentTest=data;
      //console.log(data);
    },
    error => this.errorMessage = error as any);
    
    this.patientService.getPatientsList().subscribe(data=>{
      this.patient=data;
    });
  }

  formatedDate:any;
  pid:any;
  createReport(report:Report){
    this.formatedDate=this.pipe.transform(this.report.dateOfReport, "dd-MMM-yyyy");
    report.dateOfReport=this.formatedDate;
    report['patient']={} as Patient;
    report['patient']['patientId']={} as number;
    report['patient']['patientId']=this.form.controls.patientId.value;
    report.test=this.currentTest;
    if (this.form.valid) {
    this.service.createReport(report).subscribe(data=>{
      this.report=data;
     // this.report['patient']={} as Patient;
      //this.report['patient']['patientId']=this.form.controls.patientId.value;
      alert("report added");
      this.route.navigate(['report-list']);
    },
    error =>alert("patient not present"));
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
goBack(){
  this.route.navigate(['test-list']);
}
}
