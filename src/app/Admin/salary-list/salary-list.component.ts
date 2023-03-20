import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/services/salary.service';
import { AddSalary } from 'src/app/services/salary';
import { Employee } from 'src/app/services/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit
{

  salaryList :Array<any>=[];
  salary:any;

  
   pageObject  = {
                  page : 0,
                  size: 5,
                  totalPage:0
                  }


  emplpoyee: Employee=new Employee();
  addSalary: AddSalary=new AddSalary();

  constructor(private salaryService: SalaryService,
              private router: Router){}
  
  
  
  ngOnInit(): void 
  {
   
    // let resp=this.salaryService.getSalary();
       
    // resp.subscribe((data)=>
    // {
    //    console.log(data);
    //    this.salary=data;
    // });

   this.getPagination();
  }

   
     getPagination()
     {
      this.salaryService.getSalaryPagination(this.pageObject.page, this.pageObject.size).subscribe((data: any)=>
      {
        console.log(data);
        this.salary=data.content;
        this.pageObject.page=data.number;
        console.log(this.pageObject.page);
     //   console.log("page");
        
        this.pageObject.totalPage=data.totalPages;
       // console.log(this.pageObject.totalPage);
      })
     }



       myFuction(event: any,value: any)
       {
          
         if(event =='prev')
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
           
          if(event =='next' && this.pageObject.totalPage>this.pageObject.page)
          {
           console.log(this.pageObject.totalPage);
            this.getPagination();
            console.log("Next b");
            
          }else
          {
           alert("This is last Page !!!");
          }

          }

       }








  
 updateSalary(salaryId: number)
 {
    this.router.navigate(['updatesalary', salaryId]);
 }


 getSalaryById(id: number)
 {

 }
 

   public deleteSalary(id: number)
   {
     let res=this.salaryService.deleteLeave(id);
     
     res.subscribe(data=>
      {
        this.salary=data;
      })
   
    }


    downloadSalarySlip(salaryId: any)
    {
      console.log("Salary Pdf");
      console.log(salaryId);
      
      
      this.salaryService.salarySlip(salaryId).subscribe(data =>
      {
        console.log(data);
        

      });
    }
}
