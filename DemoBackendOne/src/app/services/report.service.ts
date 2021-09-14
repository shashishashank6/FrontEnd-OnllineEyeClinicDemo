import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Report } from '../classes/report';
import { Patient } from '../classes/patient';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
private baseUrl="http://localhost:8099/report/api/v1";
  getReportsList: any;
  constructor(private http:HttpClient) { }

createReport(report:Report):Observable<Report>{
  return this.http.post<Report>(this.baseUrl+"/reports",report);
}
updateReport(report:Report):Observable<Report>{
  return this.http.put<Report>(this.baseUrl+"/updateReport",report);
}
deleteReport(id:number):Observable<Object>{
  return this.http.delete(this.baseUrl+"/deleteReport"+"/"+id);
}
getReportById(id:number):Observable<Report>{
  return this.http.get<Report>(this.baseUrl+"/reports"+"/"+id);
  }
getReportByDate(dateOfReport:Date):Observable<Report>{
return this.http.get<Report>(this.baseUrl+"/getReport"+"/"+dateOfReport);
}
getAllReports():Observable<Report[]>{
  return this.http.get<Report[]>(this.baseUrl+"/allReports")
}
getReportByTest(id:number):Observable<Report>{
  return this.http.get<Report>(this.baseUrl+"/testReport/"+id);
}
viewReportByPatient(id:number):Observable<Report>{
  return this.http.get<Report>(this.baseUrl+"/patientReport/"+id);
}
}
