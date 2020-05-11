
import { Component } from '@angular/core';
import { PatientService } from './Patient/PatientService';
import { IPatient } from './Patient/Patient';

@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  pageTitle: string='CEC PMS';
  title:string='PMS';
  searchText:string;  
  errorMessage:string;
  constructor(private patientService:PatientService ){
       
  }

 
}