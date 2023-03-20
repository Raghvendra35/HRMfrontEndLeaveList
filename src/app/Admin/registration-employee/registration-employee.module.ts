import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationEmployeeRouting } from './registration-employee.routing';
import { RegistrationEmployeeComponent } from './registration-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RegistrationEmployeeComponent],
  imports: [
    CommonModule,
    RegistrationEmployeeRouting,
    HttpClientModule,
    
    FormsModule,
    RouterModule
  ]
})
export class RegistrationEmployeeModule { }
