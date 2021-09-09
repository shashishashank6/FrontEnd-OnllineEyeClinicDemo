import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  constructor(private pipe:DatePipe) { }
//date1=new DatePipe('en-US');
//date2=new Date('02-10-2021');
date :any;
  formatedDate : any;
//date2=new DatePipe('en-US');

//format=this.date.transform(this.date1,'dd-MMM-yyyy');
  ngOnInit(): void {
  }
  onkeyUp(){
    //this.date=new Date("02-Apr-2021");
    this.formatedDate=this.pipe.transform(this.date, "dd-MMM-yyyy"); 
   console.log(this.formatedDate);
  }

}
