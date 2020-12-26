import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientSearchComponent } from './Patient/PatientSearchComponent';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import { PatientRegisterComponent } from './Patient/PatientRegisterComponent';

import {RouterModule} from '@angular/router'
import { HomeComponent } from './home/homeComponent';
import { PatientDetailComponent } from './Patient/PatientDetailComponent';
import { SigninRedirectCallbackComponent } from './auth/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './auth/signout-redirect-callback.component';
import { AuthInterceptorService } from './auth/AuthInterceptorService';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user.component';
import { ClientAdminRouteGuard } from './shared/clientadmin-route-guard';
import { AuthGuard } from './auth/Auth-guard';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientRegisterComponent, 
    PatientDetailComponent,
    HomeComponent,
    UnauthorizedComponent,
    UserComponent,
    AddUserComponent
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    RouterModule.forRoot(
      [{path:'patientRegister', component: PatientRegisterComponent},
      {path:'manageUsers', component: UserComponent, canActivate:[ClientAdminRouteGuard]},
      {path:'addUser', component: AddUserComponent, canActivate:[ClientAdminRouteGuard]},
      {path:'patientSearch/:searchText', component: PatientSearchComponent, canActivate: [AuthGuard]},
      {path:'patientDetail/:id', component:PatientDetailComponent},
      {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
      {path:'unauthorized', component:UnauthorizedComponent},
      { path: 'signin-callback', component: SigninRedirectCallbackComponent },
      { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
      {path:'', redirectTo:'home', pathMatch:'full',  canActivate: [AuthGuard]},
      {path:'**', redirectTo:'home', pathMatch:'full'},

      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
