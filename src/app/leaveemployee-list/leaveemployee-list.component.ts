import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { LeaveEmployee } from '../leave';
import { Employee } from '../employee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-leaveemployee-list',
  templateUrl: './leaveemployee-list.component.html',
  styleUrls: ['./leaveemployee-list.component.css']
})
export class LeaveemployeeListComponent implements OnInit
 {
     



    leaveList: Array<any>=[];
    leaveEmployees:any;


    pageObject  = {
                   page: 0,
                   size: 5,
                   totalPage:0,
                   
                }

    employee: Employee=new Employee();
    leaveEmployee: LeaveEmployee=new LeaveEmployee();

  constructor(private leaveService: LeaveService,
              private router: Router){
                
              }

  
  
  ngOnInit(): void 
  {
  /* let res=this.leaveService.getLeave();
 
    res.subscribe((data)=>
      {
        console.log(data);
        this.leaveEmployees=data;
       })*/

       this.getPagination();

      
       
  }

    

     getPagination()
     {
         this.leaveService.getLeavePagination(this.pageObject.page, this.pageObject.size).subscribe((data: any)=>
            {
              console.log(data);
              this.leaveEmployees=data.content;
              console.log(data.content.totalPages);
              console.log("number");
              this.pageObject.page=data.number;
              console.log(this.pageObject.page);
              
              this.pageObject.totalPage=data.totalPages
                  
            })
     }    


     myFuction(event:any,value: any)
     {

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

   

  updateLeave(leaveId: number)
  {
    this.router.navigate(['updateleave', leaveId]);
  }

  getSalaryById(id: number)
  {
 
  }
  
  public deleteLeave(id: number)
  {
   let res=this.leaveService.deletetLeave(id);

   res.subscribe(data=>
    {
      this.leaveEmployees=data;
    })
  }

}
