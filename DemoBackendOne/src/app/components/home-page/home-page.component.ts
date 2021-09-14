import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
adminLogin(){
  this.route.navigate(['login']);
}
patientLogin(){
  this.route.navigate(['patient-login']);
}
doctorLogin(){
  this.route.navigate(['doctor-login']);
}
}
