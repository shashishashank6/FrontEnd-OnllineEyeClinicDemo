import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Doctor } from '../classes/doctor';
import { Test } from '../classes/test';
import { Appointment } from '../classes/appointment';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private baseUrl="http://localhost:8099/doctor/api/v1/doctors";
private testUrl="http://localhost:8099/doctor/api/v1/createTest";
private appUrl="http://localhost:8099/doctor/api/v1/getAppointments";
  constructor(private http:HttpClient) { }

getDoctorsList():Observable<Doctor[]>{
  return this.http.get<Doctor[]>(this.baseUrl);
}
createDoctor(doctor:Doctor):Observable<Object>{
  return this.http.post(this.baseUrl,doctor);
}
getDoctorById(id:number):Observable<Doctor>{
return this.http.get<Doctor>(this.baseUrl+"/"+id);
}
updateDoctor(doctor:Doctor):Observable<Doctor>{
  return this.http.put<Doctor>(this.baseUrl,doctor);
}
deleteDoctor(id:number):Observable<Object>{
  return this.http.delete(this.baseUrl+"/"+id);
}
createTest(test:Test):Observable<Object>{
  return this.http.post(this.testUrl,test);
  }
  viewAppointments(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.appUrl+"/"+id);
  }
  loginService(login){
    //alert("loginService: "+JSON.stringify(login));
    return this.http.post("http://localhost:8099/doctor/api/v1/authenticate", login);
  }
}
