import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/AuthService';

@Injectable({providedIn: 'root'})
export class ClientAdminRouteGuard implements CanActivate {
    constructor(private authService:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.authContext && this.authService.authContext.isClientAdmin; 
    }
}