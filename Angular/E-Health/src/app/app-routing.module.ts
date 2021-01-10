import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './user-logins/admin-login/admin-login.component';
import { DoctorLoginComponent } from './user-logins/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './user-logins/patient-login/patient-login.component';
import { PathologistLoginComponent } from './user-logins/pathologist-login/pathologist-login.component';
import { PharmacistLoginComponent } from './user-logins/pharmacist-login/pharmacist-login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorRegisterComponent } from './user-register/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './user-register/patient-register/patient-register.component';
import { DoctorListComponent } from './crud operations/doctor-list/doctor-list.component';
import { CreateDoctorComponent } from './crud operations/create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './crud operations/doctor-details/doctor-details.component';
import { UpdateDoctorComponent } from './crud operations/update-doctor/update-doctor.component';
import { AppointmentListComponent } from './crud operations/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './crud operations/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './crud operations/update-appointment/update-appointment.component';
import { AppointmentDetailsComponent } from './crud operations/appointment-details/appointment-details.component';
import { AppointmenthistoryComponent } from './crud operations/appointmenthistory/appointmenthistory.component';
import { DoctorappointmentsComponent } from './crud operations/doctorappointments/doctorappointments.component';
import { PrescriptionComponent } from './crud operations/prescription/prescription.component';
import { GetprescriptionComponent } from './crud operations/getprescription/getprescription.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AddLabtestComponent } from './crud operations/add-labtest/add-labtest.component';
import { LabtestListComponent } from './crud operations/labtest-list/labtest-list.component';
import { UpdateLabtestComponent } from './crud operations/update-labtest/update-labtest.component';
import { AddMedicineComponent } from './crud operations/add-medicine/add-medicine.component';
import { MedicinelistComponent } from './crud operations/medicinelist/medicinelist.component';
import { UpdateMedicineComponent } from './crud operations/update-medicine/update-medicine.component';
import { PharmacistDashboardComponent } from './dashboard/pharmacist-dashboard/pharmacist-dashboard.component';
import { PathologistDashboardComponent } from './dashboard/pathologist-dashboard/pathologist-dashboard.component';
import { ViewprescriptionsComponent } from './dashboard/viewprescriptions/viewprescriptions.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'doctor-login', component:DoctorLoginComponent},
  {path: 'patient-login', component:PatientLoginComponent},
  {path: 'pathologist-login', component:PathologistLoginComponent},
  {path: 'pharmacist-login', component:PharmacistLoginComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path: 'doctor-dashboard', component:DoctorDashboardComponent},
  {path: 'patient-dashboard', component:PatientDashboardComponent},
  {path: 'doctor-register', component:DoctorRegisterComponent},
  {path: 'patient-register', component:PatientRegisterComponent},
  {path: 'doctorlist',component:DoctorListComponent},
  {path: 'createdoctor',component:CreateDoctorComponent},
  {path: 'details/:id',component:DoctorDetailsComponent},
  {path: 'update/:id',component:UpdateDoctorComponent},
  {path: 'appointments', component: AppointmentListComponent},
  {path: 'createappointment', component: CreateAppointmentComponent},
  {path: 'updateappointment/:id', component:UpdateAppointmentComponent},
  {path: 'appointmentdetails/:id', component:AppointmentDetailsComponent},
  {path: 'appointmenthistory', component:AppointmenthistoryComponent},
  {path: 'viewdoctorappointments', component:DoctorappointmentsComponent},
  {path: 'prescription/:pid',component:PrescriptionComponent},
  {path: 'updatePrescription/:id', component:PrescriptionComponent},
  {path: 'getprescription/:id', component:GetprescriptionComponent},
  {path: 'errorpage', component:ErrorpageComponent},
  {path:'pathologist-dashboard', component:PathologistDashboardComponent},
  {path:'addLabtest',component:AddLabtestComponent},
  {path:'labtests',component:LabtestListComponent},
  {path:'updateLabtest/:lid',component:UpdateLabtestComponent},
  {path:'pharmacist-dashboard',component:PharmacistDashboardComponent},
  {path:'addMedicine',component:AddMedicineComponent},
  {path:'medicines',component:MedicinelistComponent},
  {path:'updateMedicine/:mid',component:UpdateMedicineComponent},
  {path: 'viewprescription',component:ViewprescriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
