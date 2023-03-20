import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseURL from './help';
import { AddSalary } from './salary';

@Injectable({
  providedIn: 'root'
})


export class SalaryService
 {

  constructor(private httpClient: HttpClient) { }



  getSalary()
  {
    return this.httpClient.get(`${baseURL}/api/addsalary`);
  }

  



  saveSalary(addSalary: AddSalary)
  {
    return this.httpClient.post(`${baseURL}/api/addsalary`, addSalary);

  }



  updateSalary(salarId:any, addSalary: AddSalary)
  {
   return this.httpClient.put(`${baseURL}/api/addsalary/${salarId}`, addSalary);
  }




  getSalaryById(salarId: number): Observable <AddSalary>
  {
   return this.httpClient.get<AddSalary>(`${baseURL}/api/addsalary/${salarId}`);

  }




  deleteLeave(id: number)
  {
   return this.httpClient.delete(`${baseURL}/api/addsalary/${id}`);
  }


  
  getSalaryPagination(pageNumber=0, pageSize=5)
  {
    return this.httpClient.get(`${baseURL}/api/addsalary/paginations?page=${pageNumber}&size=${pageSize}`);
  }


  //Download Salary Slip
  salarySlip(id:any)
  {
        return this.httpClient.get(`${baseURL}/api/addsalary/salaryslippdf/${id}`);
  }
}
