import { Component, OnInit } from '@angular/core';
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
  constructor(private act:ActivatedRoute,private testService:TestService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.act.snapshot.params["id"];
   // alert(this.id);
   this.testService.getTestById(this.id).subscribe(data=>{
     this.test=data;
   })
  }
saveUpdatedTest(){
  this.testService.updateTest(this.test).subscribe(data=>{
    this.route.navigate(['test-list']);
  });
}
goToList(){
this.route.navigate(['test-list']);
}
}
