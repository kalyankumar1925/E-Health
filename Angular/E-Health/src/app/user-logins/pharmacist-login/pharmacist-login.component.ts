import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist-login',
  templateUrl: './pharmacist-login.component.html',
  styleUrls: ['./pharmacist-login.component.css']
})
export class PharmacistLoginComponent implements OnInit {

  username: string;
  password: string;
  message: any
 
  constructor(private router:Router) { }
 
  ngOnInit() {
  }
 
  doLogin() {
    if(this.username=="pharmacist" && this.password=="password")
          this.router.navigate(["/pharmacist-dashboard"])
     else
        this.router.navigate(["/errorpage"])  
  }
  goBack(){
    this.router.navigate(['/login']);
  }
}

