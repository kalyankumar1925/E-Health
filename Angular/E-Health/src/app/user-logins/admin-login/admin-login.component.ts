import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: string;
  password: string;
  message: any

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.username);
    if(this.username=="admin" && this.password=="password")
      this.router.navigate(["/admin-dashboard"])
    else
      this.router.navigate(["/errorpage"])
  }

  goBack(){
    this.router.navigate(["/login"])
  }
  
}
