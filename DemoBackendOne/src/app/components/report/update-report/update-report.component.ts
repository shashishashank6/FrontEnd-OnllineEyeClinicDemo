import { Component, OnInit } from '@angular/core';
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
  constructor(private serviceUpdate:ReportService,private route:ActivatedRoute,private routeGet:Router) { }

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
    this.serviceUpdate.updateReport(this.report).subscribe(
      data=>{
        alert("report-updated");
       this.getReportById();
      }
      );
      }
      getReportById(){
        this.routeGet.navigate(['report-details',this.id]);
      }
      goBack(){
        this.routeGet.navigate(['report-details',this.id]);
      }
}
