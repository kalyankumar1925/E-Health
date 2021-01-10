import { Component, OnInit } from '@angular/core';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';

import { Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';
import { DoctorService } from 'src/app/doctor.service';
import { Doctor } from 'src/doctor';
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
 
  appointment: Appointment =new Appointment();
  doctors:Doctor[];

  constructor(private appointmentService: AppointmentService, private doctorService: DoctorService,
     private  router:Router) { }
  

  ngOnInit(): void {
    this.getDoctors();
  }

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data =>{
      console.log(data);
      this.goToAppointmentList();
    },
    error => console.log(error));
  }

  goToAppointmentList(){
    this.router.navigate(['/patient-dashboard']);

  }
 onSubmit(){
   console.log(this.appointment);
   this.saveAppointment();

 }
 private getDoctors(){
  this.doctorService.getDoctors().subscribe(data =>{
    this.doctors =data;
    console.log(data);
  });
}
  goBack()
  {
    this.router.navigate(["/patient-dashboard"])
  }
}
