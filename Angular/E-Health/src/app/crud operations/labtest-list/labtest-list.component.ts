import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labtest } from 'src/app/labtest';
import { LabtestService } from 'src/app/labtest.service';

@Component({
  selector: 'app-labtest-list',
  templateUrl: './labtest-list.component.html',
  styleUrls: ['./labtest-list.component.css']
})
export class LabtestListComponent implements OnInit {

  labtests: Labtest[];

  constructor(private labtestservice: LabtestService,
    private router:Router) { }

  ngOnInit(): void {
    this.getLabtests();

    }

    private getLabtests(){
      this.labtestservice.getLabtestList().subscribe(data =>{
        this.labtests =data;
      });
    }
    updateLabtest(lid: number){
      this.router.navigate(['updateLabtest', lid]);
    }

    deleteLabtest(lid: number){
      this.labtestservice.deleteLabtest(lid).subscribe(data =>{
        console.log(data);
        this.getLabtests();
      })
    }
    goBack(){
      this.router.navigate(['/pathologist-dashboard']);
    
     }
  }