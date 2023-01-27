import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { LeaveEmployee } from '../leave';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaveemployee-list',
  templateUrl: './leaveemployee-list.component.html',
  styleUrls: ['./leaveemployee-list.component.css']
})
export class LeaveemployeeListComponent implements OnInit
 {

    leaveList: Array<any>=[];
    leaveEmployees:any;

    employee: Employee=new Employee();

  constructor(private leaveService: LeaveService,
              private router: Router){}

  
  
  ngOnInit(): void 
  {
   let res=this.leaveService.getLeave();
 
    res.subscribe((data)=>
      {
        console.log(data);
        this.leaveEmployees=data;
        
      })
  }

  updateLeave(leaveId: number)
  {
    this.router.navigate(['updateleave', leaveId]);
  }

  getSalaryById(id: number)
  {
 
  }
  
  public deleteLeave(id: number)
  {
   let res=this.leaveService.deletetLeave(id);

   res.subscribe(data=>
    {
      this.leaveEmployees=data;
    })
  }

}
