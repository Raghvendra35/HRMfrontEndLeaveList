import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeFirstComponent } from './home-first/home-first.component';
import { AdminComponent } from './admin.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: 
  [
    AdminRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
