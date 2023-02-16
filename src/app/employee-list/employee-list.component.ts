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

  pageObject ={

    page: 0,
    size: 5,
    totalPage:0
  }
  

  
    constructor(private employeeService: EmployeeService, private router: Router){}
  
    
    ngOnInit(): void 
    {
      // let resp=this.employeeService.getEmployee();
      //  resp.subscribe((data)=>
      //   {
      //  //   console.log(data);
          
      //     this.employees=data;
      //   });
    
      this.getPagination();
    }


      getPagination()
      {
        this.employeeService.getEmployeePagination(this.pageObject.page, this.pageObject.size).subscribe((data:any)=>
        {
          console.log(data);
            this.employees=data.content;
            this.pageObject.page=data.number;
            console.log(this.pageObject.page);
             this.pageObject.totalPage=data.totalPages
        })
      }
  

      myFuction(event:any,value: any)
      {
          //console.log(event);
           if(event == 'prev')
           {
             this.pageObject.page = value- 1;
             if(this.pageObject.page >-1 && event =='prev' && this.pageObject.totalPage >this.pageObject.page)
             {
               this.getPagination();
               console.log("prev B");
               
             }
            }

          if(event == 'next')
           {
           this.pageObject.page = value+1;
            
           if(event =='next' && this.pageObject.totalPage >this.pageObject.page)
           {
             this.getPagination();
             console.log("Next b");
             
           }else
           {
            alert("This is last Page !!!");
           }
 
           }
         
    }
        
                 
                      
       


    public deleteEmployee(id: number)
    {
      console.log('delete id',id);
      
     let res= this.employeeService.deleteEmployee(id);
    
       res.subscribe((data)=> this.employees=data);  
    }
  
   

    
    updateEmployee(employeeId:number)
    {
     this.router.navigate(['updateemployee',employeeId]);
     
    }

  



    getEmployeeById(id:any){

    }


    getDetails(employeeId:number)
    {
     this.router.navigate(['employeelist/detailspage/',employeeId]);
     
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
    
  
  