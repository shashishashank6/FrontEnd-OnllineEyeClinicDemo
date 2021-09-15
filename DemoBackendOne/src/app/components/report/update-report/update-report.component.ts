import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/classes/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {
  report:Report = new Report();
  id:number;
  reportForm:FormGroup;
  constructor(private serviceUpdate:ReportService,private route:ActivatedRoute,private routeGet:Router,private fb:FormBuilder) { 
    this.reportForm=this.fb.group({
      dateOfReport:['',Validators.required],
      descriptionOfReport:['',Validators.required],
      visualAcuity:['',Validators.required],
      visualAcuityForNear:['',Validators.required],
      visualAcuityForDistance:['',Validators.required]
    });
  }

  ngOnInit(): void {
    //getting id from route
    this.id=this.route.snapshot.params['id'];
    this.serviceUpdate.getReportById(this.id).subscribe(
      data=>{
        this.report=data;
      },
      error=>console.log(error)
    );
  }
  saveUpdatedReport(){
    if (this.reportForm.valid) {
    this.serviceUpdate.updateReport(this.report).subscribe(
      data=>{
        alert("report-updated");
       this.getReportById();
      }
      );
    }
    else{
      this.validateAllFields(this.reportForm);
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
        this.routeGet.navigate(['report-details',this.id]);
      }
      goBack(){
        this.routeGet.navigate(['report-details',this.id]);
      }
}
