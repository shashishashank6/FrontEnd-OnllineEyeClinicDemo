import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/classes/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.css']
})
export class ReportDataComponent implements OnInit {
  id:number;
  dateOfReport:Date;;
  report:any;
 // report:any;

  constructor(private route:ActivatedRoute,private reportService:ReportService,private router:Router) { }

  ngOnInit(): void {
  this.dateOfReport=this.route.snapshot.params['dateOfReport'];
  this.report=new Report();
  this.reportService.getReportByDate(this.dateOfReport).subscribe(data=>{
    this.report=data;
  });
  
  }
  updateReport(reportId:number){
    this.router.navigate(['update-report',reportId]);  
    }
    reportDetails(id:number){
    this.router.navigate(['report-details',this.id]);
     }
     deleteReport(reportId:number){
      let del=this.reportService.deleteReport(reportId);
      del.subscribe((data)=>{
        this.report=data});
       // this.getReportById();i
     // });
  }

}