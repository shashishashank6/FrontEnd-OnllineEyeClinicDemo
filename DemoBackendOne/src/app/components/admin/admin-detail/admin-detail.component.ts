import { PlatformLocation } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {
id:number;
admin:Admin;
admin1:Admin[];

  constructor(private route:ActivatedRoute,private adminService:AdminService,private route2:Router) { 
    route2.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.route2.navigate(["admin-details",this.id]);
        }
      });
  }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.admin=new Admin();
    this.adminService.getAdminById(this.id).subscribe(data=>{
      this.admin=data;

    });
    
  }
// logOff user
logout(): void {
  if (sessionStorage.getItem("username") != null) {
    //console.log(sessionStorage.getItem("username"));
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userid");
    this.route2.navigate(['/login']);
  }
}
reports(){
  this.route2.navigate(['report-list',this.id]);
}
}
