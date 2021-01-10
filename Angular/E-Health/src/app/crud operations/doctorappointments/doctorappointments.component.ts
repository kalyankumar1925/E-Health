import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';
import { DoctorService } from 'src/app/doctor.service';
import { Prescription } from 'src/app/prescription';

@Component({
  selector: 'app-doctorappointments',
  templateUrl: './doctorappointments.component.html',
  styleUrls: ['./doctorappointments.component.css']
})
export class DoctorappointmentsComponent implements OnInit {

  appointments: Appointment[];
  constructor(private appointmentService: AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctorAppointments();
    }

    private getDoctorAppointments(){
      this.appointmentService.getdoctorAppointments().subscribe(data =>{
        this.appointments =data;
        console.log(data);
      });
    }

    goBack(){
      this.router.navigate(["/doctor-dashboard"])
    }

}
