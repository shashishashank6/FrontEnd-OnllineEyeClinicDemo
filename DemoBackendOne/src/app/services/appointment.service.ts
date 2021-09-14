import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../classes/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
private baseUrl="http://localhost:8099/appointment/api/v1/appointments";
  constructor(private http:HttpClient) { }
bookAppointment(app:Appointment):Observable<Appointment>{
return  this.http.post<Appointment>(this.baseUrl,app);
}
deleteAppointment(id:number):Observable<Object>{
  return this.http.delete(this.baseUrl+"/"+id);
}
updateAppointment(app:Appointment):Observable<Appointment>{
  return this.http.put<Appointment>(this.baseUrl,app);
}
getAppointmentById(id:number):Observable<Appointment>{
  return this.http.get<Appointment>(this.baseUrl+"/"+id);
}
}
