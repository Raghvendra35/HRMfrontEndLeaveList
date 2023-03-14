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
    cifNumber:string;
    experience:string;
    previousCompanyName:string;
    designation:string;
    password:string;
    gender:string;
    dateOfBirth:string;
    address:Array<Address> = [];
    qualification:Array<Qualification>=[];
    employeeImage:Array<EmployeeImage>=[];

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
            qaulificationId: number;
            course:  string;
            board:  string;
            passingyear: string;
            percentage: string;
            status: string;
        }
  

     

    export class EmployeeImage
    {
       imageId:number;
       name: string;
       imageType: string;
       imageData:any;
    }
  
    export class Login{
      username:string;
      email:string;
      password:string;
    }