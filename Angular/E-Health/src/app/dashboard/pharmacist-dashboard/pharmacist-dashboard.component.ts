import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist-dashboard',
  templateUrl: './pharmacist-dashboard.component.html',
  styleUrls: ['./pharmacist-dashboard.component.css']
})
export class PharmacistDashboardComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['/pharmacist-login']);
  
   }
  
}
