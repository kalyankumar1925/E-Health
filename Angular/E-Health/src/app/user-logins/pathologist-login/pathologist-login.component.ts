import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pathologist-login',
  templateUrl: './pathologist-login.component.html',
  styleUrls: ['./pathologist-login.component.css']
})
export class PathologistLoginComponent implements OnInit {
  username: string;
  password: string;
  message: any
 
  constructor(private router:Router) { }
 
  ngOnInit() {
  }
 
  doLogin() {
    if(this.username=="pathologist" && this.password=="password")
          this.router.navigate(["/pathologist-dashboard"])
     else
        this.router.navigate(["/errorpage"])     
  
  }
  goBack(){
    this.router.navigate(['/login']);
  }
}
