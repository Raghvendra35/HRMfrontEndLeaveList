import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveemployeeListComponent } from './leaveemployee-list.component';
import { LeaveEmployeeListRoutingModule } from './leaveemployee-list.routing';



@NgModule({
  declarations: [LeaveemployeeListComponent],
  imports: [
    CommonModule,
    LeaveEmployeeListRoutingModule
  ]
})
export class LeaveemployeeListModule { }
