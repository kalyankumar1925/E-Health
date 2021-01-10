import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/doctor.service';
import { Prescription } from 'src/app/prescription';

@Component({
  selector: 'app-getprescription',
  templateUrl: './getprescription.component.html',
  styleUrls: ['./getprescription.component.css']
})
export class GetprescriptionComponent implements OnInit {

id:any;
 prescription:Prescription = new Prescription();
  constructor(private doctorService:DoctorService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.doctorService.getPrescriptionId(this.id).subscribe(data =>{
      this.prescription= data;
    },error => {
      console.log(error)
      this.router.navigate(['/errorpage'])
    });
  }

  goBack(){
    this.router.navigate(["/appointmenthistory"])
  }
}
