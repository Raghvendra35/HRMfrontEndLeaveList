import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address, Employee, Qualification } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registration-employee',
  templateUrl: './registration-employee.component.html',
  styleUrls: ['./registration-employee.component.css']
})
export class RegistrationEmployeeComponent implements OnInit {
 
  employee: Employee = new Employee();
 
   perAddress: Address = new Address();
   curAddress: Address = new Address();

  qualification10: Qualification=new Qualification();
  qualification12: Qualification=new Qualification();
  qualificationBachelor: Qualification=new Qualification();
  qualificationMaster: Qualification=new Qualification();

  constructor(private employeeService: EmployeeService) { }


 ngOnInit() { }

  addEmployee() {

  }

  formSubmit() {
    // console.log(this.employee);
   // console.log(this.address.aaddress='current');
    
   
    this.employee.address.push(this.perAddress);
    this.employee.address.push(this.curAddress);

    this.employee.qualification.push(this.qualification10);
    this.employee.qualification.push(this.qualification12);
    this.employee.qualification.push(this.qualificationBachelor);
    this.employee.qualification.push(this.qualificationMaster);




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
