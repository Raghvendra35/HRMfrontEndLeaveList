import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit
 {
    // employees: Employee[];

  employeeList :Array<any>=[];

  employees:any;


  public deleteEmployee(id: number)
  {
    console.log('delete id',id);
    
   let res= this.employeeService.deleteEmployee(id);
  
     res.subscribe((data)=> this.employees=data);  
  }

  
    constructor(private employeeService: EmployeeService, private router: Router){}
  
  
  
    ngOnInit(): void 
    {
       
      let resp=this.employeeService.getEmployee();
       
        resp.subscribe((data)=>
        {
          this.employees=data;
        });
    
    }
   
    updateEmployee(employeeId:number)
    {
     this.router.navigate(['updateemployee',employeeId]);
     
    }

    
  }























    // this.employeeService.getEmpLIst().subscribe(data =>
    //   {
    //     this.employees = data;
    //   })
    // throw new Error('Method not implemented.');
    //this.getfetchEmpolyee();
  
 
 // getfetchEmpolyee(){
    //this.employeeService.getEmployee().subscribe({
     //next:(data)=>{
      //  this.employeeList = data;
       // console.log((this.employeeList));
        
     // }
    //})
  //}

//}
    
  
  