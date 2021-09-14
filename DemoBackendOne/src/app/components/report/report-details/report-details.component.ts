import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/classes/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
id:number;
report:any;
reportlist:Report[];
//report1:any;
  constructor(private route:ActivatedRoute,private reportService:ReportService,private router:Router) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.report=new Report();
  this.reportService.getReportById(this.id).subscribe(data=>{
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
        this.report=data;
      alert("report-deleted");
      this.goBack();
      });
       // this.getReportById();i
     // });
  }
  goBack(){
    this.router.navigate(['report-list']);
  }
}
