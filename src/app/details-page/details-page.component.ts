import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Employee, Qualification } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})


export class DetailsPageComponent implements OnInit 
{

  employeeList :Array<any>=[];

   employeeId:number;
   id: number;
   //details:Array<any>=[];
   employeedetails:any;
   employee: Employee=new Employee();
   address: Address=new Address();
   qualification: Qualification=new Qualification();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute)
  {
    this.route.params.subscribe(parm=>
      {
        console.log(parm);
        this.employeeId=parm['id'];
      })
  }
  
 // getEmployeeById()
  //{
   // this.employeeService.getEmployeeById(this.employeeId).subscribe(data=>
   //{
   //  this.details=data;
 //   this.employee=data;
   //}), (error)=>
  // {
   // console.log(error);
   //}
  //}

  

  ngOnInit(): void 
  {
  
    //this.getEmployeeById();

  let res=this.employeeService.getEmployeeById(this.employeeId);
     
    res.subscribe(data=>
    
    {
        console.log(data);
        this.employeedetails=data;
    //   this.employee=data;
      }), (error)=>
      {
       console.log(error);
      }
  }

  
}
