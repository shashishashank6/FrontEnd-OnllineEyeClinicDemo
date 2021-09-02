import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Doctor } from '../classes/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private baseUrl="http://localhost:8099/doctor/api/v1/doctors";
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
}
