import { NgModule } from '@angular/core';
import { PatientRegisterComponent } from './PatientRegisterComponent';
import { PatientSearchComponent } from './PatientSearchComponent';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/Shared.module';

@NgModule({
    declarations:[
    PatientSearchComponent,
    PatientRegisterComponent],
    imports: [        
       SharedModule,
        
        RouterModule.forChild(
            [{path:'patientRegister', component: PatientRegisterComponent},
            {path:'patientSearch/:searchText', component: PatientSearchComponent}
         ] )
        ]
})
export class PatientModule{

}