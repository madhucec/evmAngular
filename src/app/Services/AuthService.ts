import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client'
import { Subject } from 'rxjs';
import { AuthConstants } from '../AuthConstants';
import { AuthContext } from '../Model/AuthContext';
import { UserProfile } from '../Model/UserProfile';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userManager: UserManager;
  private user: User;
  private loginChangedSubject = new Subject<boolean>();
  loginChanged = this.loginChangedSubject.asObservable();
  authContext:AuthContext;
  
  constructor(private httpClient:HttpClient) {
    const idpSettings = {
      authority: AuthConstants.stsAuthority,
      client_id: 'pms',
      redirect_uri: `${AuthConstants.clientRoot}signin-callback`,
      scope: 'openid profile',
      response_type: 'code',
      post_logout_redirect_uri: `${AuthConstants.clientRoot}signout-callback`,
      automaticSilentRenew:true,
      silent_redirect_uri: `${AuthConstants.clientRoot}assets/silent-callback.html`

    };

    this.userManager = new UserManager(idpSettings);
    this.userManager.events.addAccessTokenExpired(_=>{
      this.loginChangedSubject.next(false);
    });

    this.userManager.events.addUserLoaded(user=>{
      if(this.user!==user){
        this.user=user;
        this.loadUserProfile();
        this.loginChangedSubject.next(!!user && !user.expired);
      }
    });
    
  }



  login(): Promise<void> {

    return this.userManager.signinRedirect();
  }

  completeLogin() {
    return this.userManager.signinRedirectCallback().then(user => {
      this.user = user;
      this.loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }


  isLoggedIn(): Promise<boolean> {
    return this.userManager.getUser().then(user => {
      this.user = user;
      const userCurrent = !!user && !user.expired;
      if (this.user != user) {
        this.loginChangedSubject.next(userCurrent)
      }

      if(userCurrent && ! this.authContext){
        this.loadUserProfile();
      }

      return userCurrent;
    });
  }

  logout() {
    this.userManager.signoutRedirect();
  }

  completeLogout() {
    this.user = null;
    this.loginChangedSubject.next(false);
    return this.userManager.signoutRedirectCallback();
  }

  getAccessToken() {
    return this.userManager.getUser().then(user => {
      if (!!user && !user.expired) {
        return user.access_token;
      }
      else {
        return null;
      }
    });
  }

  loadUserProfile(){
    this.httpClient.get<UserProfile>(AuthConstants.userprofileUrl).subscribe(
      next=> {

        this.authContext = new AuthContext();
        this.authContext.userProfile=next; 
      },
      httpResponseError=>console.error(httpResponseError)
      
    );
    }
    
  }


