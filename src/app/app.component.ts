import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Employee } from './services/employee';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
   
  title = 'anular-frontend';
  registrationReq:Employee = new Employee();

  employeedata:any={};

  getSubmit(){
    console.log(this.registrationReq);
    
  }

  public loggedIn=false;

  constructor(private loginServise:LoginService){}

  ngOnInit(): void 
  {
      this.loggedIn=this.loginServise.isLoggedIn();
  }

}


