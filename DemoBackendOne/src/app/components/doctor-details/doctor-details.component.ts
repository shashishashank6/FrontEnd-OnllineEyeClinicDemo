import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { Test } from 'src/app/classes/test';
import { DoctorService } from 'src/app/services/doctor.service';
import { TestService } from 'src/app/services/test.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
id:number;
doctor:Doctor;
//testName:String="hello";
  constructor(private route:ActivatedRoute,private doctorService:DoctorService,private route2:Router) { 
    route2.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.route2.navigate(["doctor-details",this.id]);
        }
      });
  }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.doctor=new Doctor();
  this.doctorService.getDoctorById(this.id).subscribe(data=>{
    this.doctor=data;
   // console.log(this.doctor);
   // this.test=this.doctor.test;
  });
  }
  createTest(){
    this.route2.navigate(['create-test-doctor',this.id]);
    //console.log(id);
  }
  viewTests(id:number){
    this.route2.navigate(['view-prescribed-tests',id]);
  }
  viewAppointments(id:number){
    this.route2.navigate(['view-appointment-by-doctor',id]);
  }
  logout(): void {
    if (sessionStorage.getItem("doctorUserName") != null) {
      //console.log(sessionStorage.getItem("username"));
      sessionStorage.removeItem("doctorUserName");
      this.route2.navigate(['/doctor-login']);
    }
  }
}
