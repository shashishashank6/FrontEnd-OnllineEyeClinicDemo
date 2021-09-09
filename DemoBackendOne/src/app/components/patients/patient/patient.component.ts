import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
patientsList:Patient[];
  constructor(private route:Router,private patientService:PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }
private getPatients(){
  this.patientService.getPatientsList().subscribe(data=>{
    this.patientsList=data;
  });
}
}
