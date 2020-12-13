import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthConstants } from '../AuthConstants';
import { User } from '../Model/user';

@Injectable({providedIn:'root'})
export class UserService{

    

    constructor(private httpClient: HttpClient){

    }
    postUser(user:User):Observable<any>{

        return this.httpClient.post(AuthConstants.addUserUrl, user);
      
    }


}