
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {RouterModule} from '@angular/router'


@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnChanges{

  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  pageTitle: string='CEC PMS';
  title:string='PMS';
  searchText:string;  
  errorMessage:string;
 
 
}