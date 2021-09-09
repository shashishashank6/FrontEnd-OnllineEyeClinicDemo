import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Appointment } from '../classes/appointment';
import { Patient } from '../classes/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl="http://localhost:8099/patient/api/v1/patients";
  private baseUrl1="http://localhost:8099/patient/api/v1/getAppointments";
  constructor(private http:HttpClient) { 
  }
  getPatientsList():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseUrl);
  }
  createPatient(patient:Patient):Observable<Object>{
    return this.http.post(this.baseUrl,patient);
  }
  getPatientById(id:number):Observable<Patient>{
  return this.http.get<Patient>(this.baseUrl+"/"+id);
  }
  updatePatient(patient:Patient):Observable<Patient>{
    return this.http.put<Patient>(this.baseUrl,patient);
  }
  deletePatient(id:number):Observable<Object>{
    return this.http.delete(this.baseUrl+"/"+id);
  }
  viewAppointmentByPatient(id:number):Observable<Appointment>{
    return this.http.get<Appointment>(this.baseUrl1+"/"+id);
  }
}
