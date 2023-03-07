import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
   
  employee: Employee=new Employee();


  constructor(private employeeService: EmployeeService,
              private router: Router){}

    ngOnInit(): void
     {
     }

     submit()
     {
      console.log("Login Page =================");
      console.log(this.employee.emailId);
      console.log(this.employee.password);
      this.employeeService.login(this.employee).subscribe(data=>
        {
          alert("Saved !!!");
          this.router.navigate(["check"])
        },(error)=>
        {
          alert("Failed !!!");
        })
      

           
     }
}
