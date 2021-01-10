import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { PatientLoginService } from 'src/app/patient-login.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  user =new User();
  message:any
  constructor(private _service : PatientLoginService,private router:Router) { }
  ngOnInit(): void {
  }

  loginUser()
  {
    this._service.loginUserFormRemote(this.user).subscribe
    (data=>{
      this.message=data.username
      console.log("response received"+this.message);
      this.router.navigate(["/patient-dashboard"])
    },
    error=>console.log("exception occured")
    )
  }

  goBack(){
    this.router.navigate(["/login"])
  }
}
