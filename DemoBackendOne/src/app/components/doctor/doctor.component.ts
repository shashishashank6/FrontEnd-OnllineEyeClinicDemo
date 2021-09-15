import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/classes/admin';
import { Doctor } from 'src/app/classes/doctor';
import { Test } from 'src/app/classes/test';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctorlist;
  currentAdmin:any;
  admin:Admin;
  
  constructor(private doctorService:DoctorService, private router:Router,private route:ActivatedRoute) { }
//numbering=0;
  ngOnInit(): void {
   this.getDoctors();
  
   //alert(sessionStorage.getItem("username"));
  }
  test1:Test[];
private getDoctors(){
  
  this.doctorService.getDoctorsList().subscribe(
    data=>{
      this.doctorlist=data;
    }
  );
 // alert(sessionStorage.getItem('username'));
  this.currentAdmin=sessionStorage.getItem('userid');
}
updateDoctor(id:number){
this.router.navigate(['update-doctor',id]);  
}
deleteDoctor(id:number){
this.doctorService.deleteDoctor(id).subscribe(data=>{
  alert("doctor-deleted");
  this.getDoctors();
});
}
doctorDetails(id:number){
  
this.router.navigate(['doctor-details',id]);
}
goBack(){
  this.router.navigate(['admin-details',this.currentAdmin]);
}
}
