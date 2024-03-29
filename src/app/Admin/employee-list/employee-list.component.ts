import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component(
  {
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit
 {
    // employees: Employee[];

  employeeList :Array<any>=[];
  employees:any;
  employeeId: any;

  pageObject ={

    page: 0,
    size: 10,
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
            this.employeeId=this.employees.employeeId;
            this.pageObject.page=data.number;
            console.log(this.pageObject.page);
             this.pageObject.totalPage=data.totalPages
        })
      }
  

      // asd(a){
      //   this.router.navigate(['employeelist/'+a])
      // }

      
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
      
     this.employeeService.deleteEmployee(id).subscribe(data=>
      {
        this.router.navigate(['employeeList']);
      },(error)=>
      {
        this.router.navigate(['employeeList']);
        alert("Failed !!!");
      })
    
         
    }
  
   

    
    updateEmployee(employeeId:number)
    {
   
       console.log("Update employee list page printing the employeee Id"+ employeeId);
       console.log(employeeId);
    //   this.router.navigate(['admin/employeelist/admin/updateemployee',employeeId]);
     
    }

  



    getEmployeeById(id:any){

    }


    getDetails(employeeId:number)
    {
      console.log("Inside Details page ......................");
   
      console.log(employeeId);
     
    //  this.router.navigate(['employeelist/detailspage/',employeeId]);
     
    }
    



    // Related Search 

    keywordSearch: any;

    search(keyword: any)
    {
     console.log(keyword);
     this.employeeService.searchData(keyword).subscribe(data=>
      {
        console.log(data);
        this.employees=data;
      })
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
    
  
  