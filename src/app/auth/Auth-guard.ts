import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.initAuthSession().then(_ => true);
    }
}