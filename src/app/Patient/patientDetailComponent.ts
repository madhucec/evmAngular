import { Component } from '@angular/core';
import { IPatient } from '../Model/Patient';
import { PatientService } from './PatientService';
import { ActivatedRoute } from '@angular/router';
import { IBookedSlot } from '../Model/BookedSlot';

@Component({
    selector:'pms-patientDetail',
    templateUrl: './patientDetailComponent.html'
   
})
export class PatientDetailComponent{
    pageTitle: 'Patient Detail';
    patient :IPatient;
    bookedSlots:IBookedSlot[];
    errorMessage:string;
    isSchedule:boolean=true;
    dateAppointment:Date;
    staffId:string;
    constructor(private patientService:PatientService, private route: ActivatedRoute ){
       
    }

    ngOnInit() {
        let id= this.route.snapshot.paramMap.get('id');
        this.getPatientDetail(id);
    }
    getPatientDetail(id: string) {
       this.patientService.getPatientDetail(id).subscribe({
                   
            next:patient=>{  console.log("in the sbscribe");
            this.patient=patient;
            this.bookedSlots= patient.bookedSlots;
            console.log("bookedSlots::->"+JSON.stringify(this.patient.bookedSlots));
         },
            error: err=>this.errorMessage=err
        });
    }
}