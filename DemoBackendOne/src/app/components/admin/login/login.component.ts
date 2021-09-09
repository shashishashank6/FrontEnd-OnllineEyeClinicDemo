import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted: boolean = false;
invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private router2: ActivatedRoute, private adminService:AdminService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
login(){
  console.log("hello-1");
  this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
   
    console.log("hello-2");
    let login:Admin = new Admin(this.loginForm.controls.username.value, this.loginForm.controls.password.value); 
    console.log("hello-3");
    this.adminService.loginService(login).subscribe(data=>{
    
      console.log("hello-4");
    
      //alert('data: '+JSON.stringify(data["jwt"]));
      //set the JWT token in the sessionstorage with name username
      sessionStorage.setItem("username",data["jwt"]);
      
      this.router.navigate(['admin-details',data["userid"]]);
    },
    error => {
      console.log(error);
});
}
}
