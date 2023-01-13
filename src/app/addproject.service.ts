import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddProject } from './addproject';
import baseURL from './help';

@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  constructor( private httpClient: HttpClient) { }


  saveProject(addproject: AddProject)
  {
    return this.httpClient.post(`${baseURL}/addproject`, addproject);
  }
}
