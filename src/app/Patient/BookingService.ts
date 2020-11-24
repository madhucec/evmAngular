import { Injectable } from '@angular/core';
import { ICalenderResponse } from '../Model/CalenderResponse';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { BookRequest } from '../Model/BookRequest';
import { AuthConstants } from '../AuthConstants';

@Injectable({providedIn:'root'})
export class BookingService{


    getCalenderUrl= AuthConstants.apiRoot+"calender";
    bookAppointmentUrl= AuthConstants.apiRoot+"book";

    constructor(private httpClient: HttpClient){

    }

    getCalender(date:string, staffId:string):Observable<ICalenderResponse[]>{
        const params = new HttpParams()
        .set('date', date)
        .set('staffId', staffId);
        return this.httpClient.get<ICalenderResponse[]>(this.getCalenderUrl, {params} ).pipe(
          tap(data=>console.log('ALL:'+JSON.stringify(data))),
      catchError(this.handleError))
    }

    bookAppointment(date:string, staffId:string, startTime: string, endTime:string, patientId:number  ):Observable<any>{

      let  bookrequest= new BookRequest(staffId, patientId+'', date, startTime, endTime);
          
    
        return this.httpClient.post(this.bookAppointmentUrl, bookrequest);


    }







    handleError(err: HttpErrorResponse) {
        let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
    }

}