import { Component, Input } from '@angular/core';
import { IPatient } from '../Model/Patient';
import { PatientService } from './PatientService';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({   
    templateUrl: './PatientSearchComponent.html'
})



export class PatientSearchComponent{
    pageTitle: string='CEC PMS Search';
    patients:IPatient[];   
    errorMessage:string;
    private parametersObservable: any;

    constructor(private patientService:PatientService, private route: ActivatedRoute ){
       
    }

    searchPatient(searchText: string):void{
        this.patientService.getPatient(searchText, "1").subscribe({
                   
            next:patients=>{ 
            this.patients=patients; 
            console.log("in the sbscribe:->"+patients);},
            error: err=>this.errorMessage=err
        });
        
    }
    ngOnInit() {
        this.parametersObservable = this.route.params.subscribe(params => {           
           
            let searchText= this.route.snapshot.paramMap.get('searchText');
            this.searchPatient(searchText);
          });

        
    }




}