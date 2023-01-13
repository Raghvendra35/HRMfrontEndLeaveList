import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anular-frontend';
  registrationReq:Employee = new Employee();

  employeedata:any={};

  getSubmit(){
    console.log(this.registrationReq);
    
  }
}


