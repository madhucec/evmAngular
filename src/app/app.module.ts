import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientSearchComponent } from './Patient/PatientSearchComponent';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import { PatientRegisterComponent } from './Patient/PatientRegisterComponent';
import {RouterModule} from '@angular/router'
import { HomeComponent } from './home/homeComponent';
import { PatientDetailComponent } from './Patient/PatientDetailComponent';

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientRegisterComponent, 
    PatientDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{path:'patientRegister', component: PatientRegisterComponent},
      {path:'patientSearch/:searchText', component: PatientSearchComponent},
      {path:'patientDetail/:id', component:PatientDetailComponent},
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', redirectTo:'home', pathMatch:'full'}

      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
