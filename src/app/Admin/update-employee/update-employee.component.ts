import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address,Employee,Qualification } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit
 {

 // address:Array<Address> = [];
  //curAddressList :Array<any>=[];




  
  employeeId: number;
  id: number;

  
  employee: Employee = new Employee();
 
  address: Address=new Address();
  perAddress: Address = new Address();
  curAddress: Address=new Address();

   qualification10: Qualification=new Qualification();
   qualification12: Qualification=new Qualification();
   qualificationBachelor: Qualification=new Qualification();
   qualificationMaster: Qualification=new Qualification();

   

  constructor(private employeeService: EmployeeService,
              private  route: ActivatedRoute)
               {
                this.route.params.subscribe(parm=>
                  {
                  console.log(parm);
                  this.employeeId=parm['id']
                  
                  
                  
                })
               }


  ngOnInit(): void {
      console.log(this.route.snapshot.params);
       

    this.employeeService.getEmployeeById(this.employeeId).subscribe(data =>
      {
        
        this.employee =data;
        this.perAddress = data.address[0];
        this.curAddress = data.address[1];
        this.qualification10 = data.qualification[0];
        this.qualification12 = data.qualification[1];
        this.qualificationBachelor = data.qualification[2];
        this.qualificationMaster = data.qualification[3];
        


      
      }, error => console.log(error));
  }
   

  updateEmployee()
  {

  }
  

  formSubmit() {
    // console.log(this.employee);
    console.log(this.perAddress);
    
    this.employee.address.push(this.perAddress);
    this.employee.address.push(this.curAddress);

    this.employee.qualification.push(this.qualification10);
    this.employee.qualification.push(this.qualification12);
    this.employee.qualification.push(this.qualificationBachelor);
    this.employee.qualification.push(this.qualificationMaster);

    console.log( this.employee);
    
     this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe((data) => {
      console.log(data);

      alert('Updated !!!');
      console.log("SAVE----" + data);

    }, (error) => {
      console.log(error);
      alert("Failed !!!");
    }



    )
  }
}
