import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/doctor.service';
import { Prescription } from 'src/app/prescription';

@Component({
  selector: 'app-pathologist-dashboard',
  templateUrl: './pathologist-dashboard.component.html',
  styleUrls: ['./pathologist-dashboard.component.css']
})
export class PathologistDashboardComponent implements OnInit {
  
  prescription:Prescription[]
  constructor(private router:Router,private doctorService:DoctorService) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['/pathologist-login']);
  
   }
   getPrescriptions(){
     this.doctorService.getPrescription().subscribe(data=>
      {
        this.prescription=data;
        console.log(data)
      },
      error=>console.log(error))
   }
  
}
