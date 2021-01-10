import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labtest } from './labtest';
 
@Injectable({
  providedIn: 'root'
})
export class LabtestService {
  private baseURL= "http://localhost:8021/api/labtests";
  private baseURL1= "http://localhost:8021/api/addLabtest";
  private baseURL2= "http://localhost:8021/api/deleteLabtest";
  private baseUrL3="http://localhost:8021/api/updateLabtest";
  private baseUrl4="http://localhost:8021/api/labtests/{lid}";
  constructor(private httpClient: HttpClient) { }
   
  getLabtestList(): Observable<Labtest[]>{
    
    return this.httpClient.get<Labtest[]>(`${this.baseURL}`);
  }
  addLabtest(labtest: Labtest):Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL1}`, labtest);
  }
 
  updateLabtest(lid: number, labtest:Labtest): Observable<Object>{
    console.log(labtest);
    return this.httpClient.put(`${this.baseUrL3}/${lid}`,labtest);
  }
 
  deleteLabtest(lid: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${lid}`);
  }
  getLabtestById(lid: number): Observable<Labtest>
  {  
    return this.httpClient.get<Labtest>(`${this.baseURL}/${lid}`);
  }
}