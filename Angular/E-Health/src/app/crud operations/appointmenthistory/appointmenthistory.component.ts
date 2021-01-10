import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-appointmenthistory',
  templateUrl: './appointmenthistory.component.html',
  styleUrls: ['./appointmenthistory.component.css']
})
export class AppointmenthistoryComponent implements OnInit {

  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAppointmentHistory();

    }

    private getAppointmentHistory(){
      this.appointmentService.getAppointmentsHistory().subscribe(data =>{
        this.appointments =data;
        console.log(data);
      });
    }

    goBack(){
      this.router.navigate(["/patient-dashboard"])
    }
}
