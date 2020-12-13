import { IContact } from './Contact';
import { Idepartment } from './Department';

export class UserProfile{
    firstName: string;

    lastName:string;
    
    userId:string;

    department:Idepartment;

	officeName:string;
	
	officeId:number;
	
	officeClientId: number;
	
	OfficeClientName:string;

    authorities:string[];
    
	
}