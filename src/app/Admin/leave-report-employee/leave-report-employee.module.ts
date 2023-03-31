import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveReportEmployeeRouting } from './leave-report-employee.routing';
import { LeaveReportEmployeeComponent } from './leave-report-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LeaveReportEmployeeComponent],
  imports: [
    CommonModule,
    LeaveReportEmployeeRouting,

    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class LeaveReportEmployeeModule { }
