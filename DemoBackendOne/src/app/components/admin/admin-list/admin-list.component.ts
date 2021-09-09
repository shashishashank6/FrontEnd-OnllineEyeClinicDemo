import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
adminList:Admin[];
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  private getAdmins(){
    this.adminService.getAdminList().subscribe(
      data=>{
        this.adminList=data;
      }
    );
  }
}
