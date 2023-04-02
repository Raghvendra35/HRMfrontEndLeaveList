import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth.guard';
import { AuthIntercepter } from './services/auth.intercepter';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Admin/admin.component';

import { EmployeeFilesComponent } from './Admin/employee-files/employee-files.component';
import { Employee } from './services/employee';

import { RouterModule } from '@angular/router';
import { RegistrationEmployeeComponent } from './Admin/registration-employee/registration-employee.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
   
    AppComponent,
    LoginComponent,

    EmployeeFilesComponent,
   
   
    ForgotPasswordComponent,
    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
 providers: 
  [ { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true }
    ],
  
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
