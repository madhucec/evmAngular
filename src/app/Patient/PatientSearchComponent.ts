import { Component, Input } from '@angular/core';
import { IPatient } from './Patient';
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

    constructor(private patientService:PatientService, private route: ActivatedRoute ){
       
    }

    searchPatient(searchText: string):void{
        this.patientService.getPatient(searchText, "1").subscribe({
                   
            next:patients=>{  console.log("in the sbscribe");
            this.patients=patients; },
            error: err=>this.errorMessage=err
        });
        
    }
    ngOnInit() {
        let searchText= this.route.snapshot.paramMap.get('searchText');
        this.searchPatient(searchText);
    }




}