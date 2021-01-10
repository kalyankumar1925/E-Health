import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Prescription } from './prescription';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'http://localhost:8021/api/doctors';
  private baseUrl1 = 'http://localhost:8021/api/getdoctors';
  private baseUrl2 = 'http://localhost:8021/api/prescribe';

  constructor(private http: HttpClient) { }

  getDoctor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, doctor);
  }

  updateDoctor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDoctorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getDoctors():Observable<any> {
    return this.http.get(`${this.baseUrl1}`)
  }
  
  getPrescription():Observable<any> {
    return this.http.get(`${this.baseUrl2}`)
  }
  
  addPrescription(prescription: Prescription): Observable<any> {
    return this.http.post(`${this.baseUrl2}`, prescription);
  }
  getPrescriptionId(pid: number):Observable<any> {
    return this.http.get(`${this.baseUrl2}/${pid}`);
  }

  updatePrescription(pid: number,value:any): Observable<any> {
    return this.http.put(`${this.baseUrl2}/${pid}`,value);
  }
}
