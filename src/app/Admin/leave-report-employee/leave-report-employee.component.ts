import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveEmployee } from 'src/app/services/leave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-report-employee',
  templateUrl: './leave-report-employee.component.html',
  styleUrls: ['./leave-report-employee.component.css']
})
export class LeaveReportEmployeeComponent implements OnInit
{
 
  employeeData:any;

  selectedFile: any;
  currentFile: any;

  

  leaveEmployee: LeaveEmployee=new LeaveEmployee();

  constructor(private leaveService: LeaveService,
              private employeeService: EmployeeService,
              private router: Router) {}


 
  ngOnInit(): void
   {
    let res=this.employeeService.getDropdown();  
    
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
   }




  //  formSubmit()
  //  {
  //   console.log(this.leaveEmployee);
    
  //   this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
  //   {
  //      alert("Saved Leave !!!");
  //      this.router.navigate(['leavelist']);
  //   }, (error)=>
  //   {
  //     alert("Failed !!!");
  //   })
  //  }

   
   selectFile(event)
   {
     console.log(event);
     console.log(event.target);
     this.selectedFile=event.target.files[0];
   }


   //Store Image and Data

   formSubmit()
   {
    console.log(this.leaveEmployee);
    
    const formData=new FormData();
    formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
    formData.append('file', this.selectedFile);
   
   
    this.leaveService.saveLeaveAndImage(formData).subscribe((data)=>
    {
       alert("Saved Leave !!!");
       this.router.navigate(['leavelist']);
    }, (error)=>
    {
      alert("Failed !!!");
    })
   }
   
}
