import { Component } from '@angular/core';
import { IPatient } from './Patient';
import { NgForm } from '@angular/forms';
import { IAddress } from './Address';
import { IContact } from './Contact';
import { IPhone } from './Phone';
import { PatientService } from './PatientService';
import { IOffice } from './Office';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Hero } from './Hero';
import { ErrorResponse } from './ErrorResponse';

@Component({
    selector:'pms-patientregister',
    templateUrl: './patientRegisterComponent.html'
   
})
export class PatientRegisterComponent{
   // Originalpatient:IPatient;

   errorMessage:string;
   postError:boolean;
   postSuccess:boolean;
   errorResponse:ErrorResponse;
   unhandledError:any;
   constructor(private patientService:PatientService) {

   }

    address:IAddress={
        firstLine: "",
        secondLine:"",
        city:"",
        zip:"",
        state:""
    }

    phones:IPhone[]=[
        {phoneType:"", number:"" }
    ]

    contact:IContact={
        email:"",
        phones:this.phones

    }   
    
    office:IOffice={
        id:0,
        name:""
    }

   patient:IPatient={
        firstName: "",
        lastName: "",
        gender: "",
        dob: null,
        ssn:"",
        address: this.address,
        contact:this.contact,
        office:this.office
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

    onHttpSuccess(result:any){
        console.log(result);
        this.patient=result;
        this.postSuccess=true;
        this.postError=false; 
    }
  
    onSubmit(form:NgForm){
        console.log("formSubmitted");
        this.patient.dob= new DatePipe('en-US').transform(this.patient.dob, 'MM-dd-yyyy')
        this.patientService.postPatient(this.patient).subscribe(
            result=>this.onHttpSuccess(result),
            httpResponseError=>this.onHttpError(httpResponseError)        
           );
    }   
}