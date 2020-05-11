import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { IPatient } from './Patient';


@Injectable({providedIn:'root'})
export class PatientService{

    patientServiceUrl="http://localhost:8200/patient/search";
    constructor(private httpClient: HttpClient){

    }
    getPatient(searchString:string, officeId:string):Observable<IPatient[]>{
      console.log(searchString);
      const params = new HttpParams()
      .set('searchString', searchString)
      .set('officeId', "1");
            
      console.log(params);
        return this.httpClient.get<IPatient[]>(this.patientServiceUrl, {params} ).pipe(
            tap(data=>console.log('ALL:'+JSON.stringify(data))),
        catchError(this.handleError)
    );
 
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