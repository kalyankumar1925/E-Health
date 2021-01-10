import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
 
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseURL= "http://localhost:8021/api/medicines";
  private baseURL1= "http://localhost:8021/api/addMedicine";
  private baseUrL3="http://localhost:8021/api/updateMedicine";
  private baseUrl4="http://localhost:8021/api/medicines/{lid}";
  private baseUrl5="http://localhost:8021/api/deleteMedicine"
  constructor(private httpClient: HttpClient) { }
   
  getMedicineList(): Observable<Medicine[]>{
    
    return this.httpClient.get<Medicine[]>(`${this.baseURL}`);
  }
  addMedicine(medicine: Medicine):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, medicine);
  }
 
  updateMedicine(mid: number, medicine:Medicine): Observable<Object>{
    return this.httpClient.put(`${this.baseUrL3}/${mid}`, medicine);
  }
 
  deleteMedicine(mid: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${mid}`);
  }
  getMedicineById(mid: number): Observable<Medicine>
  {
    return this.httpClient.get<Medicine>(`${this.baseURL}/${mid}`);
  }

}
