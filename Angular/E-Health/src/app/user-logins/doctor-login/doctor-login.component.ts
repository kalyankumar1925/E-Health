import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientLoginService } from 'src/app/patient-login.service';
import { Doctor } from 'src/doctor';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor =new Doctor();
  message:any
  constructor(private _service : PatientLoginService,private router:Router) { }
  ngOnInit(): void {
  }

  loginDoctor()
  {
    this._service.loginDoctorFormRemote(this.doctor).subscribe
    (data=>{
      this.message=data.fname
      console.log("response received"+this.message);
      this.router.navigate(["/doctor-dashboard"])
    },
    error=>{
      this.router.navigate(["/errorpage"])
      console.log("exception occured")
    }
    )
  }

  goBack(){
    this.router.navigate(["/login"])
  }
}
