import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientLoginService } from 'src/app/patient-login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  user =new User();
  message:any
  constructor(private _service : PatientLoginService,private router:Router) { }
  ngOnInit(): void {
  }

  registerUser()
  {
    this._service.registerUserFormRemote(this.user).subscribe
    (data=>{
      this.message=data.username
      console.log("response received"+this.message);
     this.router.navigate(["/register"])
    },
    error=>console.log("exception occured")
    )
  }
}
