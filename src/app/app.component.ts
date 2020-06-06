
import { Component } from '@angular/core';
import {RouterModule} from '@angular/router'


@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  pageTitle: string='CEC PMS';
  title:string='PMS';
  searchText:string;  
  errorMessage:string;
 
 
}