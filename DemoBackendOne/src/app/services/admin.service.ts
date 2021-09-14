import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl="http://localhost:8099/admin/api/v1";
  /*requestHeader=new HttpHeaders(
    {
      "No-Auth":"True"
    }*/
  //);
    constructor(private http:HttpClient) { }
  loginService(login){
    //alert("loginService: "+JSON.stringify(login));
    return this.http.post("http://localhost:8099/admin/api/v1/authenticate", login);
  }
  getAdminList():Observable<Admin[]>{
   return this.http.get<Admin[]>(this.baseUrl+"/get");
  }
  getAdminById(id:number):Observable<Admin>{
    return this.http.get<Admin>(this.baseUrl+"/viewAdmin/"+id);
    }
}
