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


//Paginataion

  getLeavePagination(pageNumber=0, pageSize=5)
  {
    return this.httpClient.get(`${baseURL}/api/leaveemployee/pagination?page=${pageNumber}&size=${pageSize}`);
  }
  




  

  //get LeftLeave by passing leaveManageId(class)
  getSingleEmployeeLeave(leaveManageId: any)
  {
    return this.httpClient.get(`${baseURL}/api/leave/${leaveManageId}`)
  }

  
  //get LeftLeave by passing employeeId
  getleftLeaveByEmployeeId(employeeId: any)
  {
   return this.httpClient.get(`${baseURL}/api/byemployeeId/${employeeId}`);
  }

  //update CasualLeave by passing EmployeeId
   updateCasualLeave(casualLeave: any, employeeId: any, leaveManage:any)
   {
     return this.httpClient.put(`${baseURL}/api/updatecasualleave/${casualLeave}/${employeeId}`,leaveManage);
   }


    //update Sick Leave by passing EmployeeId
    updateSickLeave(sickLeave: any, employeeId: any, leaveManage:any)
    {
      return this.httpClient.put(`${baseURL}/api/updatesickleave/${sickLeave}/${employeeId}`,leaveManage);
    }

    //update Marriag Leave by passing EmployeeId
    updateMarriageLeave(marriageLeave: any, employeeId: any, leaveManage:any)
    {
        return this.httpClient.put(`${baseURL}/api/updatemarriageleave/${marriageLeave}/${employeeId}`,leaveManage);
    }


    //update Maternity Leave 
    updateMaternityLeave(maternityLeave: any, employeeId: any, leaveManage:any)
    {
        return this.httpClient.put(`${baseURL}/api/updatematernityleave/${maternityLeave}/${employeeId}`,leaveManage);
    }


    //update Paternity Leave 
    updatePaternityLeave(paternityLeave: any, employeeId: any, leaveManage:any)
    {
        return this.httpClient.put(`${baseURL}/api/updatepaternityleave/${paternityLeave}/${employeeId}`,leaveManage);
    }

  
 //update Earn Leave 
 updateEarnLeave(earnLeave: any, employeeId: any, leaveManage:any)
 {
     return this.httpClient.put(`${baseURL}/api/updateearnleave/${earnLeave}/${employeeId}`,leaveManage);
 }   


 //update Bareavement Leave 
 updateBareavementLeave(bareavementLeave: any, employeeId: any, leaveManage:any)
 {
     return this.httpClient.put(`${baseURL}/api/updatebareavementleave/${bareavementLeave}/${employeeId}`,leaveManage);
 }



}
