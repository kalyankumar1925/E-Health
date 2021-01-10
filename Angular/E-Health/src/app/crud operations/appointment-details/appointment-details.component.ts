import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';


@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  id: number
  appointment: Appointment
  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.appointment=new Appointment();
    this.appointmentService.getAppointmentById(this.id).subscribe(data =>{
      this.appointment=data;

    });
  }

}
