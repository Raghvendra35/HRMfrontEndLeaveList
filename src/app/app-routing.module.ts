import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LeaveReportEmployeeComponent } from './leave-report-employee/leave-report-employee.component';
import { LoginComponent } from './login/login.component';
import { RegistrationEmployeeComponent } from './registration-employee/registration-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
 {path: 'employeelist', component: EmployeeListComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/registration', component: RegistrationEmployeeComponent},
  {path: 'updateemployee/:id', component: UpdateEmployeeComponent},
  {path: 'leavereport', component: LeaveReportEmployeeComponent},
  {path: 'addreport', component: AddProjectComponent},
  {path: 'addproject', component: AddProjectComponent},
  {path: 'addsalary', component: AddSalaryComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
