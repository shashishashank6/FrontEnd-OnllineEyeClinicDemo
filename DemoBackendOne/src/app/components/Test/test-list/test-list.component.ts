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
      this.route.navigate(["test-list"]);
    },
    error => this.errorMessage = error as any);
  }
}
