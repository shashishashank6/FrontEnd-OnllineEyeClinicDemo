import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctorlist:Doctor[];
  constructor(private doctorService:DoctorService, private router:Router) { }

  ngOnInit(): void {
   this.getDoctors();
  }
private getDoctors(){
  this.doctorService.getDoctorsList().subscribe(
    data=>{
      this.doctorlist=data;
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
