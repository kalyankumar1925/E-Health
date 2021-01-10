import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/doctor.service';
import { Doctor } from 'src/doctor';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Observable<Doctor[]>;
  constructor(private doctorService:DoctorService ,
    private router:Router) {}

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.doctors=this.doctorService.getDoctorsList();
  }
deleteDoctor(id:number){
  this.doctorService.deleteDoctor(id)
    .subscribe(data=>{
      console.log(data);
      this.reloadData();
    },
    error=>console.log(error)
    );
}
  doctorDetails(id:number){
    this.router.navigate(['details',id]);
  }

  updateDoctor(id:number){
    this.router.navigate(['update',id]);
  }

  goBack()
  {
    this.router.navigate(["/admin-dashboard"])
  }
}
