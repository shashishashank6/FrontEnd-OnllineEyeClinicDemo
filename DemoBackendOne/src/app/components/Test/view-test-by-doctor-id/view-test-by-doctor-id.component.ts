import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/classes/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-view-test-by-doctor-id',
  templateUrl: './view-test-by-doctor-id.component.html',
  styleUrls: ['./view-test-by-doctor-id.component.css']
})
export class ViewTestByDoctorIdComponent implements OnInit {
id:number;
test:Test;
errorMessage:string;
  constructor(private act:ActivatedRoute,private testService:TestService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.act.snapshot.params["id"];
    //alert(this.id);
    this.testService.viewTestByDoctorId(this.id).subscribe(data=>{
      this.test=data;
      console.log(this.test);
    }, error => this.errorMessage = error as any);
  }
  goBack(){
    this.route.navigate(['doctor-details',this.id]);
  }
  viewReport(id:number){
    let doctorId:number;
    doctorId=this.id;
    this.route.navigate(['view-test-report',id,doctorId]);
  }
}
