import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {
  mid:number;
  medicine: Medicine= new Medicine();
  constructor(private medicineservice: MedicineService,
    private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
    this.mid= this.route.snapshot.params['mid'];
 
    this.medicineservice.getMedicineById(this.mid).subscribe(data =>{
      this.medicine= data;
    },error => console.log(error));
    }
 
    onSubmit(){
      this.medicineservice.updateMedicine(this.mid, this.medicine).subscribe(data =>{
        this.goToMedicineList();
      },error => console.log(error));   
    }
 
    goToMedicineList(){
      this.router.navigate(['/medicines']);
  
    }


}
