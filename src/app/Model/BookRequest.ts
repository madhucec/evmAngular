export class BookRequest{
     staffId:string;	
	patientId:string;	
	 date:string;	
	startTime:string;
     endTime:string;
     
     constructor(staffId:string,  patientId:string, date:string, startTime:string,  endTime:string) {
          this.  staffId= staffId;
          this.patientId=patientId;
          this.date=date;
          this.startTime=startTime;
          this.endTime=endTime;
    
    }
}