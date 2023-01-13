import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit
 {
  employeeId: number;
 employee: Employee = new Employee();
 
  address: Address = new Address();
   id: number;

  constructor(private employeeService: EmployeeService,
              private  route: ActivatedRoute) {
                this.route.params.subscribe(parm=>{
                  console.log(parm);
                  this.employeeId=parm['id']
                  
                })
               }


  ngOnInit(): void {
      console.log(this.route.snapshot.params);
       

    this.employeeService.getEmployeeById(this.employeeId).subscribe(data =>
      {
        this.employee =data;
      }, error => console.log(error));
  }
   
  updateEmployee()
  {

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


    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe((data) => {
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
