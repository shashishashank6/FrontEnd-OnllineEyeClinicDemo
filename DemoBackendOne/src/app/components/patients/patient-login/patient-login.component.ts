import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  patientLoginForm:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private fb:FormBuilder,private act:ActivatedRoute,private router:Router,private patientService:PatientService
  ) { 
    router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.router.navigate(["patient-login"]);
        }
      });
  }

  ngOnInit(): void {
    this.patientLoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.router.navigate(["patient-login"]);
        }
      });
  }
  login(){
    this.submitted = true;

      if (this.patientLoginForm.invalid) {
        return;
      }
      let login:Patient = new Patient(this.patientLoginForm.controls.username.value, this.patientLoginForm.controls.password.value); 
      this.patientService.loginService(login).subscribe(data=>{
        //set the JWT token in the sessionstorage with name username
        sessionStorage.setItem("patientUserName",data["jwt"]);
        
        this.router.navigate(['patient-details',data["userid"]]);
      },
      error => {
        this.invalidLogin= true;
        //alert("invalid username/password");
  });
  }
  register(){
    this.router.navigate(['register-patient']);
  }
  home(){
    this.router.navigate(['home-page']);
  }
}
