import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './user-logins/admin-login/admin-login.component';
import { DoctorLoginComponent } from './user-logins/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './user-logins/patient-login/patient-login.component';
import { PharmacistLoginComponent } from './user-logins/pharmacist-login/pharmacist-login.component';
import { PathologistLoginComponent } from './user-logins/pathologist-login/pathologist-login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorRegisterComponent } from './user-register/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './user-register/patient-register/patient-register.component';
import { DoctorListComponent } from './crud operations/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './crud operations/doctor-details/doctor-details.component';
import { UpdateDoctorComponent } from './crud operations/update-doctor/update-doctor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentListComponent } from './crud operations/appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './crud operations/appointment-details/appointment-details.component';
import { CreateAppointmentComponent } from './crud operations/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './crud operations/update-appointment/update-appointment.component';
import { AppointmenthistoryComponent } from './crud operations/appointmenthistory/appointmenthistory.component';
import { DoctorappointmentsComponent } from './crud operations/doctorappointments/doctorappointments.component';
import { CreateDoctorComponent } from './crud operations/create-doctor/create-doctor.component';
import { PrescriptionComponent } from './crud operations/prescription/prescription.component';
import { GetprescriptionComponent } from './crud operations/getprescription/getprescription.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MedicinelistComponent } from './crud operations/medicinelist/medicinelist.component';
import { LabtestListComponent } from './crud operations/labtest-list/labtest-list.component';
import { AddLabtestComponent } from './crud operations/add-labtest/add-labtest.component';
import { AddMedicineComponent } from './crud operations/add-medicine/add-medicine.component';
import { UpdateLabtestComponent } from './crud operations/update-labtest/update-labtest.component';
import { UpdateMedicineComponent } from './crud operations/update-medicine/update-medicine.component';
import { PathologistDashboardComponent } from './dashboard/pathologist-dashboard/pathologist-dashboard.component';
import { PharmacistDashboardComponent } from './dashboard/pharmacist-dashboard/pharmacist-dashboard.component';
import { ViewprescriptionsComponent } from './dashboard/viewprescriptions/viewprescriptions.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminLoginComponent,
    DoctorLoginComponent,
    PatientLoginComponent,
    PharmacistLoginComponent,
    PathologistLoginComponent,
    AdminDashboardComponent,
    DoctorDashboardComponent,
    PatientDashboardComponent,
    DoctorRegisterComponent,
    PatientRegisterComponent,
    DoctorListComponent,
    CreateDoctorComponent,
    DoctorDetailsComponent,
    UpdateDoctorComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    AppointmenthistoryComponent,
    DoctorappointmentsComponent,
    PrescriptionComponent,
    GetprescriptionComponent,
    ErrorpageComponent,
    MedicinelistComponent,
    LabtestListComponent,
    AddLabtestComponent,
    AddMedicineComponent,
    UpdateLabtestComponent,
    UpdateMedicineComponent,
    PathologistDashboardComponent,
    PharmacistDashboardComponent,
    ViewprescriptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
