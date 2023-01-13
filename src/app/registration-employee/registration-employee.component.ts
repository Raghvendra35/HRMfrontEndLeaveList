import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address, Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registration-employee',
  templateUrl: './registration-employee.component.html',
  styleUrls: ['./registration-employee.component.css']
})
export class RegistrationEmployeeComponent implements OnInit {
 
  employee: Employee = new Employee();
 
  address: Address = new Address();

  constructor(private employeeService: EmployeeService) { }


 ngOnInit() { }

  addEmployee() {

  }

  formSubmit() {
    // console.log(this.employee);
    console.log(this.address);
    
    this.employee.address.push(this.address);
    console.log( this.employee);
    
    if (this.employee.firstName == '' || this.employee.firstName == null) {
      alert("Employee name is required");
      return;
    }


    this.employeeService.addEmployee(this.employee).subscribe((data) => {
      console.log(data);

      alert('success');
      console.log("SAVE----" + data);

    }, (error) => {
      console.log(error);
      alert("Wrong")
    }



    )
  }
  
}
