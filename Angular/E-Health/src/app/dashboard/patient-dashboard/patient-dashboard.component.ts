import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientLoginService } from 'src/app/patient-login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
 
 
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
 

  goBack(){
      this.router.navigate(["/patient-login"])
  }

}
