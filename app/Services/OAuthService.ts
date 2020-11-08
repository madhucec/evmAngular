import { Injectable } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({ providedIn: 'root' })
export class OAuthService{

    authConfig: AuthConfig = {

        issuer: 'https://users.cecpms.be/auth/realms/Dental',
        redirectUri: window.location.origin ,
        clientId: 'pms',
        //scope: 'openid profile email offline_access heroes',
        responseType: 'code',
        // at_hash is not present in JWT token
        //disableAtHashCheck: true,
        showDebugInformation: true
      }

      public logoff() {
        this.oauthService.logOut();
      }
      
      private configure() {
        this.oauthService.configure(this.authConfig);
        this.oauthService.tokenValidationHandler = new NullValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
      }
    
}