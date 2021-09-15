import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/classes/appointment';
import { Patient } from 'src/app/classes/patient';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-view-doctor-appointment',
  templateUrl: './view-doctor-appointment.component.html',
  styleUrls: ['./view-doctor-appointment.component.css']
})
export class ViewDoctorAppointmentComponent implements OnInit {
id:number;
appoint:Appointment[];
patient:Patient;
  constructor(private route:Router,private act:ActivatedRoute,private service:DoctorService) {

   }

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.service.viewAppointments(this.id).subscribe(data=>{
      this.appoint=data;
     // console.log(this.appoint);
      this.patient=data[0].patient;
    },
    error=>alert("no appointments"));
  }
goBack(){
  this.route.navigate(['doctor-details',this.id]);
}
doctorView(){
  this.route.navigate(['doctor-details',this.id]); 
}
}
