import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from 'src/app/classes/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
currentAdmin:any;
report:Report=new Report();
form=new FormGroup({
  dateOfReport:new FormControl(''),
  description:new FormControl('',Validators.required),
  visualAcuity:new FormControl('',Validators.required),
  visualAcuityForNear:new FormControl('',Validators.required),
  visualAcuityForDistance:new FormControl('',Validators.required),

});

  constructor(private createReport:ReportService,private router:Router,private pipe:DatePipe) {  
  }
  ngOnInit(): void {
  }
  formatedDate:any;
saveReport(){
  this.formatedDate=this.pipe.transform(this.report.dateOfReport, "dd-MMM-yyyy");
this.report.dateOfReport=this.formatedDate;
  if (this.form.valid) {
  this.createReport.createReport(this.report).subscribe(data=>{
    alert("report-added");
    this.router.navigate(['report-list']);
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
getReportById(){
  this.router.navigate(['/report-details']);
}
goBack(){
    this.currentAdmin=sessionStorage.getItem('userid');
    this.router.navigate(['admin-details',this.currentAdmin]);
  }
}
