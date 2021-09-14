import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { Report } from 'src/app/classes/report';
import { Test } from 'src/app/classes/test';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-view-report-by-patient',
  templateUrl: './view-report-by-patient.component.html',
  styleUrls: ['./view-report-by-patient.component.css']
})
export class ViewReportByPatientComponent implements OnInit {
id:number;
report:Report=new Report();
//report1:Report=new Report();
errorMessage:string;
test:Test=new Test();
doctor:Doctor=new Doctor();
  constructor(private act:ActivatedRoute,private service:ReportService,private route:Router) { 
    
  }

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.service.viewReportByPatient(this.id).subscribe(data=>{
      this.report=data[0];
      //this.report1=data[0];
      this.test=data[0].test;
      this.doctor=data[0].test.doctor;
      console.log(this.doctor);
      //console.log(data[0].test.doctor);
    },
    error => this.errorMessage = error as any
    );
  }
goBack(){
  this.route.navigate(['patient-details',this.id]);
}
}
