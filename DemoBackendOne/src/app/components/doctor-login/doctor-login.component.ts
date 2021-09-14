import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  doctorLoginForm:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private fb:FormBuilder,private act:ActivatedRoute,private router:Router,private doctorService:DoctorService) {
    router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.router.navigate(["doctor-login"]);
        }
      });
   }

  ngOnInit(): void {
    this.doctorLoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.router.navigate(["doctor-login"]);
        }
      });
  }
  login(){
    this.submitted = true;

      if (this.doctorLoginForm.invalid) {
        return;
      }
      let login:Doctor = new Doctor(this.doctorLoginForm.controls.username.value, this.doctorLoginForm.controls.password.value); 
      this.doctorService.loginService(login).subscribe(data=>{
        //set the JWT token in the sessionstorage with name username
        sessionStorage.setItem("doctorUserName",data["jwt"]);
        
        this.router.navigate(['doctor-details',data["userid"]]);
      },
      error => {
        this.invalidLogin= true;
        //alert("invalid username/password");
  });
  }
home(){
  this.router.navigate(['home-page']);
}
}
