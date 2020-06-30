
<<<<<<< HEAD
import { Component, OnChanges, SimpleChanges } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 773b7696c00598fa60846ff5b95aa38db43fc312
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