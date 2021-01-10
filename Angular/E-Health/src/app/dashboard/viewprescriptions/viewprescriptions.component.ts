import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/doctor.service';
import { Prescription } from 'src/app/prescription';

@Component({
  selector: 'app-viewprescriptions',
  templateUrl: './viewprescriptions.component.html',
  styleUrls: ['./viewprescriptions.component.css']
})
export class ViewprescriptionsComponent implements OnInit {

  prescription:Prescription[];
  constructor(private router:Router, private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.getPrescriptions();
  }

  getPrescriptions(){
    this.doctorService.getPrescription().subscribe(data=>{
      this.prescription=data
      console.log(data)
    },
    error=>console.log(error))
  }

  goBack(){
    this.router.navigate(['/pathologist-dashboard'])
  }
}
