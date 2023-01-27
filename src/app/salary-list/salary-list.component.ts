import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';
import { AddSalary } from '../salary';
import { Employee } from '../employee';
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

  emplpoyee: Employee=new Employee();
  
  constructor(private salaryService: SalaryService,
              private router: Router){}
  
  
  
  ngOnInit(): void 
  {
   
    let resp=this.salaryService.getSalary();
       
    resp.subscribe((data)=>
    {
       console.log(data);
       this.salary=data;
    });
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
}
