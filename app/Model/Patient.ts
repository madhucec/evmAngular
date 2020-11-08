import {  IAddress } from './Address';
import { IContact } from './Contact';
import { IOffice } from './Office';
import { IBookedSlot } from './BookedSlot';



export interface IPatient{
    id:number;
    firstName: String;
    lastName: String;
    gender: String;
    dob: String;
    ssn:String;
    address?: IAddress;
    contact:IContact;
    office:IOffice;
    bookedSlots:IBookedSlot[];

}