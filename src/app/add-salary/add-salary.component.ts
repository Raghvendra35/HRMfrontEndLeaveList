import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';
import { EmployeeService } from '../employee.service';
import { AddSalary } from '../salary';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit
{

  employeeData:any;

  addSalary: AddSalary=new AddSalary()

  constructor(private salaryService: SalaryService,
               private employeeService: EmployeeService){}

  ngOnInit(): void
   {
    let res=this.employeeService.getDropdown();  
    
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
   }

  formSubmit()
  {
   this.salaryService.saveSalary(this.addSalary).subscribe((data)=>
   {
     alert("Saved !!!");
   }, (error)=>
 {
     alert(" Failed !!!");
 }
  )
  }


}
