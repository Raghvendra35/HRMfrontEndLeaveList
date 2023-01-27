import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddProject } from './addproject';
import baseURL from './help';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  pageNumber=0;
  pageSize

  constructor( private httpClient: HttpClient) { }


  
  saveProject(addproject: AddProject)
  {
    return this.httpClient.post(`${baseURL}/api/addproject`, addproject);
  }



  getProjects()
  {
    return this.httpClient.get(`${baseURL}/api/addproject`);
  }
  

  
  getProjectPagination(pageNumber:number, pageSize:number)
  {
    return this.httpClient.get(`${baseURL}/api/addproject/pagination?${pageNumber}?${pageSize}`);
  }
  
  
  
  deleteProject(id:number)
  {
    return this.httpClient.delete(`${baseURL}/api/addproject/${id}`);
  }

  
  
  updateProject(projectId:any, addProject: AddProject)
  {
     return this.httpClient.put(`${baseURL}/api/addproject/${projectId}`, addProject);
  }

 

  getProjectById(projectId: number): Observable<AddProject>
  {
    return this.httpClient.get<AddProject>(`${baseURL}/api/addproject/getby/${projectId}`);
  }

}
