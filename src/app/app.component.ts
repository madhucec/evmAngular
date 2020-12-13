
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AuthService } from './Services/AuthService';


@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnChanges, OnInit{

  pageTitle: string='CEC PMS';
  title:string='PMS';
  searchText:string;  
  errorMessage:string;
  isLoggedIn:boolean;

  constructor(private authService:AuthService){
    this.authService.loginChanged.subscribe(loggedIn=>{
      this.isLoggedIn=loggedIn;
    });
  }

login(){
  this.authService.login();
}

logout(){
  this.authService.completeLogout();
}

  ngOnInit(): void {
    //this.authService.login();
    this.authService.isLoggedIn().then(loggedin=> this.isLoggedIn=loggedin)
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  
  isClientAdmin():boolean{
 
   return this.authService.authContext && this.authService.authContext.isClientAdmin;
  }
 
  isPMSAdmin(): boolean{
    return this.authService.authContext && this.authService.authContext.isPMSadmin;
  }
}