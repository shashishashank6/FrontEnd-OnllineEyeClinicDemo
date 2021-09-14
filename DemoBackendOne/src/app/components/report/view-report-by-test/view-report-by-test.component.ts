import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { Report } from 'src/app/classes/report';
import { Test } from 'src/app/classes/test';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-view-report-by-test',
  templateUrl: './view-report-by-test.component.html',
  styleUrls: ['./view-report-by-test.component.css']
})
export class ViewReportByTestComponent implements OnInit {
id:number;
report:Report;
errorMessage:string;
doctorId:number;
//test:Test;
patient:Patient=new Patient();
  constructor(private act:ActivatedRoute,private route:Router,private service:ReportService) { }

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.doctorId=this.act.snapshot.params['doctorId'];
    this.service.getReportByTest(this.id).subscribe(data=>{
      this.report=data[0];
      this.patient=data[0].patient;
      console.log(this.patient);
    },
     error => this.errorMessage = error as any);
  }
goBack(){
 this.route.navigate(['view-prescribed-tests',this.doctorId]);
}
}
