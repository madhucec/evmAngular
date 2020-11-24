import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client'
import { Subject } from 'rxjs';
import { AuthConstants } from '../AuthConstants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userManager: UserManager;
  private user: User;
  private loginChangedSubject = new Subject<boolean>();

  loginChanged = this.loginChangedSubject.asObservable();

  constructor() {
    const idpSettings = {
      authority: AuthConstants.stsAuthority,
      client_id: 'pms',
      redirect_uri: `${AuthConstants.clientRoot}signin-callback`,
      scope: 'openid profile',
      response_type: 'code',
      post_logout_redirect_uri: `${AuthConstants.clientRoot}signout-callback`

    };

    this.userManager = new UserManager(idpSettings);


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

      return userCurrent;
    });
  }

  logout() {
    this.userManager.signoutRedirect();
  }

  completeLogout() {
    this.user = null;
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


}