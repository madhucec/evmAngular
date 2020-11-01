import { Injectable } from '@angular/core';

declare var Keycloak:any;

@Injectable()
export class KeycloakService {
  
constructor() { }
private keycloakAuth: any;
init(): Promise<any> {
 return new Promise((resolve, reject) => {
    const config = {
      'url': 'https://users.cecpms.be/auth',
      'realm': 'Dental',
      'clientId': 'pms'
    };
    this.keycloakAuth = new Keycloak(config);
    this.keycloakAuth.init({ onLoad: 'login-required' })
      .success(() => {
        resolve();
      })
      .error(() => {
        reject();
      });
    });
}
getToken(): string {
  return this.keycloakAuth.token;
}
}
