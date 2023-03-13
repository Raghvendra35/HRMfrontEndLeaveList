import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { CreatepdfComponent } from './createpdf/createpdf.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EmployeeFilesComponent } from './employee-files/employee-files.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeFirstComponent } from './home-first/home-first.component';
import { HomeComponent } from './home/home.component';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';
import { LeaveReportEmployeeComponent } from './leave-report-employee/leave-report-employee.component';
import { LeaveemployeeListComponent } from './leaveemployee-list/leaveemployee-list.component';
import { LoginComponent } from './login/login.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
//import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RegistrationEmployeeComponent } from './registration-employee/registration-employee.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { TestingComponent } from './testing/testing.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { UpdateProjectsComponent } from './update-projects/update-projects.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { UploadfileService } from './uploadfile.service';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';



const routes: Routes = [
  
  {path: '', component: HomeComponent},
  // {path: '/home2', component: HomeFirstComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employeelist/registration', component: RegistrationEmployeeComponent},
  {path: 'updateemployee/:id', component: UpdateEmployeeComponent},
  {path: 'leavereport', component: LeaveReportEmployeeComponent},
  {path: 'leavelist', component: LeaveemployeeListComponent},
  {path: 'leavelist/leavereport', component: LeaveReportEmployeeComponent},
  {path: 'leavelist/updateleave/:id', component: UpdateLeaveComponent},
  {path: 'updateleave/:id', component: UpdateLeaveComponent},
  {path: 'addreport', component: AddProjectComponent},
  {path: 'projectlist/addproject', component: AddProjectComponent},
  {path: 'projectlist', component: ProjectsListComponent},
  {path: 'updateproject/:id', component: UpdateProjectsComponent},
  {path: 'salarylist/addsalary', component: AddSalaryComponent},
  {path: 'salarylist', component: SalaryListComponent},
  {path: 'updatesalary/:id', component: UpdateSalaryComponent},
  {path: 'employeelist/detailspage/:id', component: DetailsPageComponent},
  {path: 'imagelist', component: UploadfilesComponent},
  {path: 'uploadfiles', component: EmployeeFilesComponent},
  {path: 'pdf', component: CreatepdfComponent},
  {path: 'check', component: TestingComponent},
  {path: 'leavemanage', component: LeaveManageComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
