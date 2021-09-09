import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Test } from 'src/app/classes/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
test:Test=new Test();
testForm:FormGroup;
  constructor(private testService:TestService,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.testForm=this.fb.group({
      testName:['',Validators.required],
      testCost:[''],
      testDescription:['',Validators.required]
    });
  }
  public createTest(test:Test){
    this.testService.createTest(test).subscribe(data=>{
      this.test=data;
    });
  }
}
