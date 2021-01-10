import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labtest } from 'src/app/labtest';
import { LabtestService } from 'src/app/labtest.service';

@Component({
  selector: 'app-update-labtest',
  templateUrl: './update-labtest.component.html',
  styleUrls: ['./update-labtest.component.css']
})
export class UpdateLabtestComponent implements OnInit {

  lid:number;
  labtest: Labtest= new Labtest();
  constructor(private labtestservice: LabtestService,
    private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
    this.lid= this.route.snapshot.params['lid'];
 
    this.labtestservice.getLabtestById(this.lid).subscribe(data =>{
      this.labtest= data;
    },error => console.log(error));
    }
 
    onSubmit(){
      this.labtestservice.updateLabtest(this.lid, this.labtest).subscribe(data =>{
        this.goToLabtestList();
      },error => console.log(error));   
    }
 
    goToLabtestList(){
      this.router.navigate(['/labtests']);
  
    }
  }