import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListRoutingModule } from './projects-list-routing.module';
import { ProjectsListComponent } from './projects-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],

  
  imports: [
    CommonModule,
    ProjectsListRoutingModule,
    RouterModule
  ]
})
export class ProjectsListModule { }
