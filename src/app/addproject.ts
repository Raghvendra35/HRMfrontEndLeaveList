import { Employee } from "./employee";

export class AddProject
{
     projectId: number;
	 projectName: string;
	 clientName: string;
	 teamLeader: string;
	 developingTechnology: string;
	 databaseTechnology: string;
     fromDate: string;
     toDate: string;
	 
	 employeeId:number;
	 employee: Employees;
    
}

export class Employees
{
	firstName:any;
	emailId:any;
	employeeId:any;
}