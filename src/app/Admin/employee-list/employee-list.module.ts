// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { EmployeeListRoutingModule } from './employee-list-routing.module';
// import { EmployeeListComponent } from './employee-list.component';
// import { RouterModule } from '@angular/router';


// @NgModule({
//   declarations: [EmployeeListComponent],

  
//   imports: [
//     CommonModule,
//     EmployeeListRoutingModule,
//     RouterModule
//   ]
// })
// export class EmployeeListModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeListRouting } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeListRouting,
    RouterModule
  ]
})
export class EmployeeListModule { }
