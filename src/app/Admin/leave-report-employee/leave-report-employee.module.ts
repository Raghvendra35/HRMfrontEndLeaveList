import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeaveReportEmployeeComponent } from './leave-report-employee.component';
import { AddLeaveRoutingModule } from './leave-report-employee.routing';
@NgModule({
  declarations: [LeaveReportEmployeeComponent],
  imports: [
    CommonModule,
    AddLeaveRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class AddLeaveModule { }
