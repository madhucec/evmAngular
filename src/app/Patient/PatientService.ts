import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { IPatient } from '../Model/Patient';


@Injectable({providedIn:'root'})
export class PatientService{
   

    patientSearchUrl="http://localhost:8200/pms-service/patient/search";
    patientDetailUrl="http://localhost:8200/pms-service/patient/details";
    patientRegisterUrl="http://localhost:8200/pms-service/patient/register"
    constructor(private httpClient: HttpClient){

    }

    getPatientDetail(id: string): Observable<IPatient> {
      const params = new HttpParams()
      .set('patientId', id)
      .set('officeId', "1");
      return this.httpClient.get<IPatient>(this.patientDetailUrl, {params} ).pipe(
        tap(data=>console.log('ALL:'+JSON.stringify(data))),
    catchError(this.handleError)
);
  }
    getPatient(searchString:any, officeId:string):Observable<IPatient[]>{
      console.log(searchString);
      const params = new HttpParams()
      .set('searchString', searchString)
      .set('officeId', "1");
            
      console.log(params);
        return this.httpClient.get<IPatient[]>(this.patientSearchUrl, {params} ).pipe(
            tap(data=>console.log('ALL:'+JSON.stringify(data))),
        catchError(this.handleError)
    );
 
}

postPatient(patient:IPatient):Observable<any>{

  return this.httpClient.post(this.patientRegisterUrl, patient);

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