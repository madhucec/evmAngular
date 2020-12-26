import { NgModule } from '@angular/core';
import { AuthService } from './AuthService';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback.component';
import { AuthInterceptorService } from './AuthInterceptorService';
import { AuthGuard } from './auth-guard';

@NgModule({
  imports: [],
  exports: [],
  declarations: [SigninRedirectCallbackComponent],
  providers: [AuthService, AuthInterceptorService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
})
export class AuthModule { }
