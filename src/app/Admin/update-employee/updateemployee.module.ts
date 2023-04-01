import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRouting } from './update-employee.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [UpdateEmployeeComponent],
  
  imports: [
    CommonModule,
    UpdateEmployeeRouting,
    HttpClientModule,
    FormsModule,
    RouterModule,
   // BrowserModule 
  ]
})
export class UpdateemployeeModule { }  