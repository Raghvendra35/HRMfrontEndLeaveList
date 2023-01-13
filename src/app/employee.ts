export class Employee
  {
    employeeId: number;
    permanentAddress: String;
    currentAddress: string;
    firstName:string;
    lastName:string;
    contact:string;
    emailId:string;
    aadharCard:string;
    panCard:string;
    bankName:string;
    accountNumber:string;
    cisfNumber:string;
    experience:string;
    previousCompanyname:string;
    designation:string;
    password:string;
    gender:string;
    dateOfBirth:string;
    address:Array<Address> = [];

  }

export class  Address 
      {
        addressId: number;
        permanentAddress: String;
        currentAddress: string;
      }

  // export class  qualification: [
    //  {
         //   course:  string,
          //  board:  string,
           // passingyear: string,
           // percentage: string,
           // status: string
        //}]
  

  