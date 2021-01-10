import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/doctor';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PatientLoginService {

  constructor(private _http : HttpClient) { }

  public loginUserFormRemote(user:User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8021/api/login",user)
  }

  public registerUserFormRemote(user:User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8021/api/registeruser",user)
  }

  public loginDoctorFormRemote(doctor:Doctor):Observable<any>
  {
    return this._http.post<any>("http://localhost:8021/api/doctorlogin",doctor)
  }

  public registerDoctorFormRemote(doctor:Doctor):Observable<any>
  {
    return this._http.post<any>("http://localhost:8021/api/registerdoctor",doctor)
  }
}
