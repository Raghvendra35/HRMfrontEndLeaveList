import { Employee } from "./employee";

export class AddSalary
{
         salaryId: number;
	 employeeName: string;
         months: string;
	 amount: number;
         employeeId:number;
         totalSalary: any;
         inHandSalary: any;
         pf: any;
         esi: any;
         medicalInsurance: any;
         workingDaysInMonths: any;
	
         employee:Employees;
}

export class Employees{
        firstName:any;
        emailId:any;
        employeeId:any;
}