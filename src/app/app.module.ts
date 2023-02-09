import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationEmployeeComponent } from './registration-employee/registration-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LeaveReportEmployeeComponent } from './leave-report-employee/leave-report-employee.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { UpdateProjectsComponent } from './update-projects/update-projects.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { LeaveemployeeListComponent } from './leaveemployee-list/leaveemployee-list.component';
import { CommonModule } from '@angular/common';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    LoginComponent,
    RegistrationEmployeeComponent,
    UpdateEmployeeComponent,
    LeaveReportEmployeeComponent,
    AddProjectComponent,
    AddSalaryComponent,
    SidebarComponent,
    ProjectsListComponent,
    UpdateProjectsComponent,
    DetailsPageComponent,
    SalaryListComponent,
    LeaveemployeeListComponent,
    UpdateSalaryComponent,
    UpdateLeaveComponent,
    ImageUploadComponent,
    UploadfilesComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
