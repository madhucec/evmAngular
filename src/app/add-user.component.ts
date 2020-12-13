import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorResponse } from './Model/ErrorResponse';
import { User } from './Model/user';
import { UserService } from './Services/UserService';

@Component({
  selector: 'pm-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  errorMessage:string;
   postError:boolean;
   postSuccess:boolean;
   errorResponse:ErrorResponse;
   unhandledError:any;

   user:User={
    firstName: "",
    lastName: "",
    username: "",
    email:"",
}

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log("formSubmitted");
    
    this.userService.postUser(this.user).subscribe(
        result=>this.onHttpSuccess(result),
        httpResponseError=>this.onHttpError(httpResponseError)        
       );

       
}


onHttpSuccess(result:any){
  console.log(result);
  this.postSuccess=true;
  this.postError=false; 
}

onHttpError(httpResponseError:any){
  console.log(httpResponseError);
  this.postError=true;     
  this.postSuccess=false;
  this.errorResponse= httpResponseError.error;
  if(this.errorResponse.errors==null){
   this.unhandledError =httpResponseError.error;
   this.errorMessage=  httpResponseError.message;
  }
   else
   this.errorMessage=this.errorResponse.message;
}



}
