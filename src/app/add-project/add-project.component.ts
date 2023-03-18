import { Component, OnInit } from '@angular/core';
import { AddProject } from '../addproject';
import { AddprojectService } from '../addproject.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';



@Component(
  {
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})


export class AddProjectComponent implements OnInit 
{


    employeeData: any;
    teamLeaders: any;
    //projectManager: any;

    addProject: AddProject=new AddProject();

    constructor(private addProjectService: AddprojectService,
                private employeeService: EmployeeService,
                private router: Router){}


   ngOnInit(): void 
   {
    
    let res=this.employeeService.getDropdown();  
    
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })

     this.addProjectService.getProjects().subscribe((data)=>
     {
      this.teamLeaders=data;
     })

  }





  formSubmit()
  {

    this.addProjectService.saveProject(this.addProject).subscribe((data)=>
    {
      alert("Saved !!!");
      this.router.navigate(['projectlist']);
    },(error)=>
    {
      // alert("Failed !!!");
    })

}




validate()
{
  var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
}

}
