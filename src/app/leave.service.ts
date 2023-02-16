import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveEmployee } from './leave';
import { Employee } from './employee';
import baseURL from './help';

@Injectable({
  providedIn: 'root'
})

export class LeaveService
 {

  constructor(private httpClient: HttpClient) {}

  getLeave()
  {
    return this.httpClient.get(`${baseURL}/api/leaveemployee`);
  }


  

  saveLeave(leaveEmployee: LeaveEmployee)
  {
    return this.httpClient.post<LeaveEmployee>(`${baseURL}/api/leaveemployee`,leaveEmployee);
  }






  // saveLeaveAndImage(leaveEmployee: string, file: any)
  // {
  //   return this.httpClient.post<LeaveEmployee>(`${baseURL}/api/leaveemployee/leaveimage`,leaveEmployee, file);
  // }

 saveLeaveAndImage(formData: FormData)
  {
    return this.httpClient.post<LeaveEmployee>(`${baseURL}/api/leaveemployee/leaveimage`, formData);
  }






  updateLeave(leaveId:any, leaveEmployee: LeaveEmployee)
  {
   return this.httpClient.put(`${baseURL}/api/leaveemployee${leaveId}`, leaveEmployee);
  }

  getLeaveById(salaryId: number): Observable <LeaveEmployee>
  {
   return this.httpClient.get<LeaveEmployee>(`${baseURL}/api/leaveemployee/${salaryId}`);
  }

  deletetLeave(id: number)
  {
    return this.httpClient.delete(`${baseURL}/api/leaveemployee/${id}`);
  }




  getLeavePagination(pageNumber=0, pageSize=5)
  {
    return this.httpClient.get(`${baseURL}/api/leaveemployee/pagination?page=${pageNumber}&size=${pageSize}`);
  }
  
}
