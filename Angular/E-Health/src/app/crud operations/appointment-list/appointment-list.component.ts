import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAppointments();

    }

    private getAppointments(){
      this.appointmentService.getAppointmentsList().subscribe(data =>{
        this.appointments =data;
      });
    }

    appointmentDetails(id: number){
      this.router.navigate(['appointmentdetails', id]);

    }
    updateAppointment(id: number){
      this.router.navigate(['updateappointment', id]);
    }

    deleteAppointment(id: number){
      this.appointmentService.deleteAppointment(id).subscribe(data =>{
        console.log(data);
        this.getAppointments();
      })
    }

    goBack()
    {
      this.router.navigate(["/admin-dashboard"])
    }
  }


