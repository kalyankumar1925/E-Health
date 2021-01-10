import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labtest } from 'src/app/labtest';
import { LabtestService } from 'src/app/labtest.service';
 
@Component({
  selector: 'app-add-labtest',
  templateUrl: './add-labtest.component.html',
  styleUrls: ['./add-labtest.component.css']
})
export class AddLabtestComponent implements OnInit {
  labtest: Labtest =new Labtest();
  constructor(private labtestservice: LabtestService,
     private  router:Router) { }
  
 
  ngOnInit(): void {
  }
 
  saveLabtest(){
    this.labtestservice.addLabtest(this.labtest).subscribe(data =>{
      console.log(data);
      this.goToLabtestList();
    },
    error => console.log(error));
  }
 
  goToLabtestList(){
    this.router.navigate(['/labtests']);
 
  }
 onSubmit(){
   console.log(this.labtest);
   this.saveLabtest();
 
 }
 goBack(){
  this.router.navigate(['/pathologist-dashboard']);

 }
}
