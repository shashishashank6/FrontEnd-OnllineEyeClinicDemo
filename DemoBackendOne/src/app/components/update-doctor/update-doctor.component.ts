import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  doctor:Doctor=new Doctor();
  id:number;
  constructor(private serviceUpdate:DoctorService,private route:ActivatedRoute,private routeGet:Router) { }

  ngOnInit(): void {
    //getting id from route
    this.id=this.route.snapshot.params['id'];
    this.serviceUpdate.getDoctorById(this.id).subscribe(
      data=>{
        this.doctor=data;
      },
      error=>console.log(error)
    );
  }
  saveUpdatedDoctor(){
    this.serviceUpdate.updateDoctor(this.doctor).subscribe(
      data=>{
        alert("doctor updated");
       this.getDoctorsList();
      }
      );
      }
      getDoctorsList(){
        this.routeGet.navigate(['doctors']);
      }
      goBack(){
        this.routeGet.navigate(['doctors']);
      }
}
