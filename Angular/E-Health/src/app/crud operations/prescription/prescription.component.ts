import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/doctor.service';
import { Prescription } from 'src/app/prescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  pid:number;
  prescription= new Prescription();
  constructor(private doctorService:DoctorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.pid=this.route.snapshot.params['pid'];
     console.log(this.pid);
    }

    onSubmit(){
      this.doctorService.addPrescription(this.prescription).subscribe(data =>{
        console.log(data);
        console.log(this.prescription);
        this.router.navigate(["/viewdoctorappointments"])
      },error => console.log(error));   
    }

    goToPrescriptionList(){
      this.router.navigate(['/prescription']);
  
    }
    updatePrescription(pid:number){
      this.router.navigate(['updatePrescription',pid]);
    }

    goBack(){
      this.router.navigate(["/viewdoctorappointments"])
    }
}
