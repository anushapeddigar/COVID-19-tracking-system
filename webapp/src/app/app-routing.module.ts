import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { HospitalBedManagementComponent } from './hospital-bed-management/hospital-bed-management.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DisplayNearbyHospitalsComponent } from './display-nearby-hospitals/display-nearby-hospitals.component';
import { PatientBedAllocationComponent } from './patient-bed-allocation/patient-bed-allocation.component';
import { HomeComponent } from './home/home.component';
import { CovidInformationComponent } from './corona-virus-infopage/corona-virus-infopage.component';
import {CoronaVirusSpreadComponent} from './corona-virus-spread/corona-virus-spread.component';
import {LoginComponent} from './login/login.component';
import {CoronaVirusPrecautionsComponent} from './corona-virus-precautions/corona-virus-precautions.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuardService} from './services/auth-guard.services';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
   {path: 'register', component: RegisterPatientComponent},
   {path: 'covid-19-pandemic/symptoms', component: CheckboxComponent},
   {path: 'covid-19-pandemic/hospital-bed-management', component: HospitalBedManagementComponent},
   {path: 'covid-19-pandemic/nearby-hospitals', component: DisplayNearbyHospitalsComponent},
   {path: 'covid-19-pandemic/app-world-map', component: WorldMapComponent},
   {path: 'covid-19-pandemic/informationPage', component: CovidInformationComponent},
   {path: 'bed-allocation', component: PatientBedAllocationComponent},
   {path: 'covid-19-pandemic/app-corona-virus-spread', component : CoronaVirusSpreadComponent},
   {path: 'covid-19-pandemic/app-corona-virus-precautions', component : CoronaVirusPrecautionsComponent},
   {path: 'home/covid-19-pandemic/app-login' , component : LoginComponent},
   {path: 'home/covid-19-pandemic/app-register' , component : RegisterComponent},
   {path: 'covid-19-pandemic/app-profile' , component : ProfileComponent, canActivate: [AuthGuardService]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }