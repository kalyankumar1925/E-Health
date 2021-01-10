import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientLoginService } from 'src/app/patient-login.service';
import { Doctor } from 'src/doctor';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  doctor =new Doctor();
  message:any
  constructor(private _service : PatientLoginService,private router:Router) { }
  ngOnInit(): void {
  }

  registerDoctor()
  {
    this._service.registerDoctorFormRemote(this.doctor).subscribe
    (data=>{
      this.message=data.fname
      console.log("response received"+this.message);
      this.router.navigate(["/register"])
    },
    error=>console.log("exception occured")
    )
  }

}
