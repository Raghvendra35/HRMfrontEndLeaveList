// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent {

// }

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

declare var window: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit
{

  formModal: any;

  forgotData ={
               emailId:'' 
              }
              


    constructor(private employeeService: EmployeeService)
    { }          
  
  ngOnInit(): void
  {
   this.formModal=new window.bootstrap.Modal(
    document.getElementById("exampleModal")
   );
  }

  openModal()
  {
    this.formModal.show();
  }

  doSomething()
  {
    this.formModal.hide();
  }

  formSubmit()
  {
    console.log("Data ==========");
    console.log(this.forgotData.emailId);
    
    
     this.employeeService.sendOTP(this.forgotData.emailId).subscribe(data=>
      {
        console.log("Saved Data !!!"); 
    }  )
  }

}
