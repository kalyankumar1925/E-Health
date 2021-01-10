import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL= "http://localhost:8021/api/appointments";
  private baseURL1= "http://localhost:8021/api/appointmenthistory";
  private baseURL2= "http://localhost:8021/api/viewdoctorappointments";
  private baseURL3= "http://localhost:8021/api/prescribe";

  constructor(private httpClient: HttpClient) { }

  getAppointmentsList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }
  createAppointment(appointment: Appointment):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, appointment);
  }

  getAppointmentById(id: number): Observable<Appointment>
  {
    return this.httpClient.get<Appointment>(`${this.baseURL}/${id}`);
  }

  updateAppointment(id: number, appointment:Appointment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, appointment);
  }

  deleteAppointment(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getAppointmentsHistory(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL1}`);
  }

  getdoctorAppointments(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL2}`);
  }
}
