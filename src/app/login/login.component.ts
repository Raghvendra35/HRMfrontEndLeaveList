import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, Login } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
   
  employee: Employee=new Employee();

  userLogin:Login=new Login();

  userLoginDetails:any;


  constructor(private employeeService: EmployeeService,
              private router: Router,private loginService:LoginService){}

    ngOnInit(): void
     {
     }

    //  submit()
    //  {
    //   console.log("Login Page =================");
    //   console.log(this.employee.emailId);
    //   console.log(this.employee.password);
    //   this.employeeService.login(this.employee).subscribe(data=>
    //     {
    //       alert("Saved !!!");
    //       this.router.navigate(["check"])
    //     },(error)=>
    //     {
    //       alert("Failed !!!");
    //     })
      

           
    //  }
     submit():void
     {
      // if(this.userLogin.username!=''){
      //   alert("please enter emailId and password")
      // }
      // else{
      //   this.router.navigate(['/employeelist']);

      // }
     
      this.loginService.userLogin(this.userLogin).subscribe((data)=>{
        
         
        this.router.navigate(['employeelist'])
  },error=>{
    console.log("Error Block");
    this.router.navigate(['employeelist'])

    
  }
  )
         

}
}
