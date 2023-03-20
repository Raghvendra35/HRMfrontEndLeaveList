import { Component, OnInit } from '@angular/core';
import { AddProject } from 'src/app/addproject';
import { AddprojectService } from 'src/app/services/addproject.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/services/employee';


@Component({
  selector: 'app-update-projects',
  templateUrl: './update-projects.component.html',
  styleUrls: ['./update-projects.component.css']
})

export class UpdateProjectsComponent implements OnInit
 {
  
  projectId: number;
  id: number;

  addProject: AddProject=new AddProject();
  employee: Employee=new Employee();

  constructor(private addProjectService: AddprojectService,
              private route: ActivatedRoute)
             {
              this.route.params.subscribe(parm=>
                {
                  console.log(parm);
                  this.projectId=parm['id'];
                })
             }                      
    
    

  ngOnInit(): void {
     
    this.addProjectService.getProjectById(this.projectId).subscribe((data)=>
    {
      console.log(data);
      this.addProject=data;
    },(error)=>
    {
      console.log(error);
    })
  }
 
  updateProject()
  {

  }

  getEmployeeId(id: number)
  {
   console.log(id);
  }

  formSubmit()
  {
    this.addProjectService.updateProject(this.projectId, this.addProject).subscribe((data)=>
    {
       console.log(data);
       alert("Success");
    },(error)=>
    {
      alert("failed !!!");
    })
  }

  
}
