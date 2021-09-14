import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/classes/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-appointments-by-patient-id',
  templateUrl: './view-appointments-by-patient-id.component.html',
  styleUrls: ['./view-appointments-by-patient-id.component.css']
})
export class ViewAppointmentsByPatientIdComponent implements OnInit {
id:number;
appoint:Appointment;
errorMessage:string;
  constructor(private act:ActivatedRoute,private patientService:PatientService,private route:Router,private appService:AppointmentService)
   { }

  ngOnInit(): void {
    this.id=this.act.snapshot.params["id"];
    //alert(this.id);
    this.patientService.viewAppointmentByPatient(this.id).subscribe(data=>{
      this.appoint=data;
      console.log(this.appoint);
    },
    error => this.errorMessage = error as any
    );
  }
  deleteAppointment(id:number){
    let result = confirm('Do you want to delete the appointment?');
    if (result) {
    this.appService.deleteAppointment(id).subscribe(data=>{
      this.goBack();
      
    },
    error => this.errorMessage = error as any
    );
  }
  }
  updateAppointment(id:number){
    let pid:number;
    pid=this.id;
    this.route.navigate(['update-appointment',id,pid]);
  }
  /*
  goToViewPatientAppointments(){
    let id:number;
    id=this.id;
    this.route.navigate(['view-appointments-by-patient',id]);
  }*/
  goBack(){
    this.route.navigate(['patient-details',this.id]);
  }

}
