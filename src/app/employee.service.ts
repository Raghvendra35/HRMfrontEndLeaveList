import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import baseURL from './help';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

//  private baseURL = "";

  constructor(private httpClient: HttpClient) { }

  
  addEmployee(employee:Employee){
    return this.httpClient.post(`${baseURL}/employee/save`,employee);
  }

    
   getEmployee()
   {
     return this.httpClient.get(`${baseURL}/employee`);
   
    }

   deleteEmployee(id:number)
    {
      return this.httpClient.delete(`${baseURL}/employee/${id}`);
    }

   getEmployeeById(employeeId: number): Observable<Employee>
    {
        return this.httpClient.get<Employee>(`${baseURL}/employee/${employeeId}`);
    }

    updateEmployee(employeeId:any, employee:Employee)
    {
      return this.httpClient.put(`${baseURL}/employee/${employeeId}`,employee);
    }
}
