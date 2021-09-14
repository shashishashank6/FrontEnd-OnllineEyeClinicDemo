import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/classes/report';
import { ReportService } from 'src/app/services/report.service';
import { AdminDetailComponent } from '../../admin/admin-detail/admin-detail.component';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
reportList:Report[];
admin:AdminDetailComponent;
adminId:number;
currentAdmin:any;

  constructor(private route:Router,private reportService:ReportService,private act:ActivatedRoute) {
   /* this.adminId=this.admin.reports();
    alert(this.adminId);*/
   }

  ngOnInit(): void {
    this.reportService.getAllReports().subscribe(data=>{
      this.reportList=data;
    });
  }
viewDetail(id:number){
this.route.navigate(['report-details',id]);
}
id:number;
goToAdmin(){
this.id=this.act.snapshot.params['id'];
this.route.navigate(['admin-details',this.id]);
}
goBack(){
  this.currentAdmin=sessionStorage.getItem('userid');
  this.route.navigate(['admin-details',this.currentAdmin]);
}
}
