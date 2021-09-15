import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/classes/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {
test:Test=new Test();
id:number;
testForm:FormGroup;
  constructor(private act:ActivatedRoute,private testService:TestService,private route:Router,private fb:FormBuilder) {
    this.testForm=this.fb.group({
      testName:['',Validators.required],
      testCost:['',Validators.required],
      testDescription:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.id=this.act.snapshot.params["id"];
   // alert(this.id);
   this.testService.getTestById(this.id).subscribe(data=>{
     this.test=data;
   })
  }
saveUpdatedTest(){
  if (this.testForm.valid) {
  this.testService.updateTest(this.test).subscribe(data=>{
    this.route.navigate(['test-list']);
  });
}
else{
  this.validateAllFields(this.testForm);
}
}
validateAllFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);            
      if (control instanceof FormControl) {             
          control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
          this.validateAllFields(control);  
      }
  });
}
goToList(){
this.route.navigate(['test-list']);
}
}
