import { Component } from '@angular/core';
import { IPatient } from '../Model/Patient';
import { PatientService } from './PatientService';
import { ActivatedRoute } from '@angular/router';
import { IBookedSlot } from '../Model/BookedSlot';
import { ICalenderResponse } from '../Model/CalenderResponse';
import { BookingService } from './BookingService';
import { DatePipe } from '@angular/common';
import { ErrorResponse } from './ErrorResponse';
import { BookRequest } from '../Model/BookRequest';

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
    dateAppointment:string;
    calenderResponse: ICalenderResponse[];
    staffId:string;
    startTime:string;
    endTime:string;
    resultBooking:string;
    postbookingSuccess:boolean;
    postbookingError:boolean;
    errorResponse:ErrorResponse;
    unhandledError:any;

    constructor(private patientService:PatientService,private bookingService:BookingService, 
         private route: ActivatedRoute ){
       
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

    getCalender(): void{
       this.dateAppointment= new DatePipe('en-US').transform(this.dateAppointment, 'MM-dd-yyyy')
        this.bookingService.getCalender(this.dateAppointment, this.staffId).
        subscribe({
    next: calenderResponse=>{
        console.log("CalenderResponse::->"+JSON.stringify(this.calenderResponse));
        this.calenderResponse=calenderResponse;
    
    },       
        error: err=>this.errorMessage=err

         } );

    }

    bookAppointment(): void{
        this.dateAppointment= new DatePipe('en-US').transform(this.dateAppointment, 'MM-dd-yyyy')
        
        console.log(this.dateAppointment+", "+this.staffId+", "+this.startTime+","+ this.endTime+", "+this.patient.id)
         this.bookingService.bookAppointment(this.dateAppointment, this.staffId, this.startTime, this.endTime, this.patient.id).
         subscribe(  result=>this.onHttpSuccess(result),
         httpResponseError=>this.onHttpError(httpResponseError) ); 
     }


     onHttpSuccess(result:any){
        console.log(result);
        this.resultBooking=result;
        this.postbookingSuccess=true;
        this.postbookingError=false; 
    }


    onHttpError(httpResponseError:any){
        console.log(httpResponseError);
        this.postbookingError=true;     
        this.postbookingSuccess=false;
        this.errorResponse= httpResponseError.error;
        if(this.errorResponse.errors==null){
         this.unhandledError =httpResponseError.error;
         this.errorMessage=  httpResponseError.message;
        }
         else
         this.errorMessage=this.errorResponse.message;
    }

}