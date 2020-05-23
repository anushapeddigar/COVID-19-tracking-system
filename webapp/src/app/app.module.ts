import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BedInfoByAdminComponent } from './bed-info-by-admin/bed-info-by-admin.component';
import {BedService} from './services/bed.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.services';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CovidInformationComponent } from './corona-virus-infopage/corona-virus-infopage.component';
import { WorldMapComponent } from './world-map/world-map.component';
import {WorldMapService} from './services/world-map.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DisplayNearbyHospitalsComponent } from './display-nearby-hospitals/display-nearby-hospitals.component';
import { PatientBedAllocationComponent } from './patient-bed-allocation/patient-bed-allocation.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { PiechartForHospitalBedsComponent } from './piechart-for-hospital-beds/piechart-for-hospital-beds.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { HospitalBedManagementComponent } from './hospital-bed-management/hospital-bed-management.component';



@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    BedInfoByAdminComponent,
    RegisterPatientComponent,
    NavBarComponent,
    CheckboxComponent,
    CovidInformationComponent,
    WorldMapComponent,
    DisplayNearbyHospitalsComponent,
    PatientBedAllocationComponent,
    HomeComponent,
    PiechartForHospitalBedsComponent,
    RegisterComponent,
    LoginComponent,
    HospitalBedManagementComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    Ng2Charts
  ],
  providers: [BedService,
    RegisterService, WorldMapService, AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
