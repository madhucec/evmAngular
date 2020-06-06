import {  IAddress } from './Address';
import { IContact } from './Contact';
import { IOffice } from './Office';



export interface IPatient{

    firstName: String;
    lastName: String;
    gender: String;
    dob: String;
    ssn:String;
    address?: IAddress;
    contact:IContact;
    office:IOffice;

}