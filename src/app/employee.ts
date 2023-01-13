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
    qualification:Array<Qualification>=[];

  }

export class  Address 
      {
        addressId: number;
        pinCode: number;
       houseNumber: string;
       city: string;
      state: string;
      typeOfAddress: string;
      }

   export class  Qualification 
      {
            course:  string;
            board:  string;
            passingyear: string;
            percentage: string;
            status: string;
        }
  

  