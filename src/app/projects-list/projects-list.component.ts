import { Component, OnInit } from '@angular/core';
import { AddprojectService } from '../addproject.service';
import { AddProject } from '../addproject';
import { Employee } from '../employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit
 {

   pageSize= 5;
   pageNumber= 0;

  pageInfo = {
    page :0,
    size:10
  }

    addProjects:any;

    employee: Employee=new Employee();



  constructor(private addProjectService: AddprojectService, private router: Router){}

  ngOnInit(): void 
  {
   let res=this.addProjectService.getProjects(); 

   res.subscribe((data)=>
   {
    this.addProjects=data;
   // this.pageInfo.page = data
   })
  }

  

  
  updateProject(projectId: number)
  {
    this.router.navigate(['updateproject',projectId]);
  }
   
  
  public deleteProject(id: number)
  {
   
    let res=this.addProjectService.deleteProject(id);

    res.subscribe((data)=>
    {
      this.addProjects=data;
    })
  }




//  myFunction(page: any) {
// document.getElementById("demo").innerHTML = "Hello World";
// }

myFuction(event: any)
{

 this.pageNumber=(event.target.value);

 console.log(this.pageNumber);

}
 


myPagination()
{
 let res=this.addProjectService.getProjectPagination( this.pageNumber,this.pageSize,);

    res.subscribe((data:any)=>
   {
    this.addProjects=data.response.content;
   
    })
}






}
