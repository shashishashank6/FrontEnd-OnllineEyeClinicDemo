import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
id:number;
patient:Patient;

  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router) {
    router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.router.navigate(["patient-details",this.id]);
        }
      });
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.patient=new Patient();
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
      //console.log(this.patient.appointment);
    });
  }

  updatePatient(id:number){
this.router.navigate(["update-patient",this.id]);
  }
  viewAppointments(id:number){
    this.router.navigate(['view-appointments-by-patient',id]); 
  }
  createAppointment(){
    this.router.navigate(['create-patient-appointment',this.id]);
    //console.log(id);
  }
  viewReports(id:number){
    this.router.navigate(['view-report-by-patient',id]);
  }
  // logOff user
logout(): void {
  if (sessionStorage.getItem("patientUserName") != null) {
    //console.log(sessionStorage.getItem("username"));
    sessionStorage.removeItem("patientUserName");
    this.router.navigate(['/patient-login']);
  }
}
}
