import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../classes/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl="http://localhost:8099/test/api/v1/tests";
  private baseUrl1="http://localhost:8099/test/api/v1/getTests";
  constructor(private http:HttpClient) { }
  getTestList():Observable<Test[]>{
return this.http.get<Test[]>(this.baseUrl);
  }
  createTest(test:Test):Observable<Test>{
    return this.http.post<Test>(this.baseUrl,test);
    }
  viewTestByDoctorId(id:number):Observable<Test>{
    return this.http.get<Test>(this.baseUrl1+"/"+id);
  }
  updateTest(test:Test):Observable<Test>{
    return this.http.put<Test>(this.baseUrl,test);
  }
  getTestById(id:number):Observable<Test>{
    return this.http.get<Test>(this.baseUrl+"/"+id);
  }
  deleteTest(id:number):Observable<Test>{
    return this.http.delete<Test>(this.baseUrl+"/"+id);
  }
}
