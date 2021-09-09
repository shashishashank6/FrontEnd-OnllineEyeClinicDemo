import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  constructor(private doctorService:DoctorService, private router:Router,private route:ActivatedRoute) { }
numbering=0;
  ngOnInit(): void {
   this.getDoctors();
  }
  test1:Test[];
private getDoctors(){
  this.doctorService.getDoctorsList().subscribe(
    data=>{
      this.doctorlist=data;
      console.log(this.doctorlist);
    }
  );
}
updateDoctor(id:number){
this.router.navigate(['update-doctor',id]);  
}
deleteDoctor(id:number){
this.doctorService.deleteDoctor(id).subscribe(data=>{
  this.getDoctors();
});
}
doctorDetails(id:number){
this.router.navigate(['doctor-details',id]);
}
}
