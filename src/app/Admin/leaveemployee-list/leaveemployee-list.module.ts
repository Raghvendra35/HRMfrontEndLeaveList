import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveemployeeListComponent } from './leaveemployee-list.component';
import { LeaveEmployeeListRoutingModule } from './leaveemployee-list.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LeaveemployeeListComponent],

  imports: [
    CommonModule,
    LeaveEmployeeListRoutingModule,
    RouterModule
  ]
})
export class LeaveemployeeListModule { }
