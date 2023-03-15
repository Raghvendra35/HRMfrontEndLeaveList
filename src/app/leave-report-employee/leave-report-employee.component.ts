import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LeaveService } from '../leave.service';
import { LeaveEmployee } from '../leave';
import { Router } from '@angular/router';

import { LeaveManage } from '../leave';



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
              private router: Router,
              ) {}

         

              
  ngOnInit(): void
   {
    let res=this.employeeService.getDropdown();  
    
    res.subscribe((data)=>
    {
     console.log("Only drop dwon +++++++++++");
      
     console.log(data);
     this.employeeData=data;
     console.log("employeeData +++++++++");
     console.log(this.employeeData);
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






   //Modal
 
 leaveRecords: any;
  leaveManage: LeaveManage=new LeaveManage();

   displayStyle = "none";
  
   openPopup()
    {
     this.displayStyle = "block";
     this.leaveService.getSingleEmployeeLeave(2).subscribe(data=>
      {
        console.log(data);
        this.leaveRecords=data;
      })
   }
   closePopup() {
     this.displayStyle = "none";
   }

}
