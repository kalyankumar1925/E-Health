import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';
 
@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  medicine: Medicine =new Medicine();
  constructor(private medicineservice: MedicineService,
     private  router:Router) { }
  
 
  ngOnInit(): void {
  }
 
  saveMedicine(){
    this.medicineservice.addMedicine(this.medicine).subscribe(data =>{
      console.log(data);
      this.goToMedicineList();
    },
    error => console.log(error));
  }
 
  goToMedicineList(){
    this.router.navigate(['/medicines']);
 
  }
 onSubmit(){
   console.log(this.medicine);
   this.saveMedicine();
 
 }
 goBack(){
  this.router.navigate(['/pathologist-dashboard']);

 }
}
