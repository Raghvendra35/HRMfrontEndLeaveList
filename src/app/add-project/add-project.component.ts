import { Component, OnInit } from '@angular/core';
import { AddProject } from '../addproject';
import { AddprojectService } from '../addproject.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit 
{

    employeeData: any;

    addProject: AddProject=new AddProject();

    constructor(private addProjectService: AddprojectService,
                private employeeService: EmployeeService){}


   ngOnInit(): void {
    
    let res=this.employeeService.getDropdown();  
    
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
  }

  formSubmit()
  {

    this.addProjectService.saveProject(this.addProject).subscribe((data)=>
    {
      alert("Saved !!!");
    
    },(error)=>
    {
      alert("Failed !!!");
    })



  }

}
