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


  constructor(private employeeService: EmployeeService){}

    ngOnInit(): void
     {
     }

     submit()
     {
      
     }
}
