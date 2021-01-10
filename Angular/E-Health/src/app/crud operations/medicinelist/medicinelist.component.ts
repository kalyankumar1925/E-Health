import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';
@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit {

  
  medicines:Medicine[];

  constructor(private medicinesservice: MedicineService,
    private router:Router) { }

  ngOnInit(): void {
    this.getMedicines();

    }

    private getMedicines(){
      this.medicinesservice.getMedicineList().subscribe(data =>{
        this.medicines =data;
      });
    }

    
    updateMedicine(mid: number){
      this.router.navigate(['updateMedicine', mid]);
    }

    deleteMedicine(mid: number){
      this.medicinesservice.deleteMedicine(mid).subscribe(data =>{
        console.log(data);
        this.getMedicines();
      })
    }
    goBack(){
      this.router.navigate(['/pharmacist-dashboard']);
    
     }
}

