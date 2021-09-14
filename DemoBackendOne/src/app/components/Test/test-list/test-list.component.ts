import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/classes/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  currentAdmin:any;
@Input() testList:Test[];
@Input() test:Test;
  constructor(private testService:TestService,private route:Router) { }
errorMessage:string;
  ngOnInit(): void {
    this.getTests();
  }
  private getTests(){
    this.testService.getTestList().subscribe(data=>{
      this.testList=data;
    });
  }
  updateTest(id:number){
    this.route.navigate(['update-test',id]);
  }
  deleteTest(id:number){
    this.testService.deleteTest(id).subscribe(data=>{
      alert("test deleted; refresh page");
      this.route.navigate(["test-list"]);
    },
    error => this.errorMessage = error as any);
  }
  addReport(id:number){
    this.route.navigate(['add-report-by-test',id]);
  }
  goBack(){
    this.currentAdmin=sessionStorage.getItem('userid');
    this.route.navigate(['admin-details',this.currentAdmin]);
  }
  addTest(){
    this.route.navigate(['create-test']);
  }
}
