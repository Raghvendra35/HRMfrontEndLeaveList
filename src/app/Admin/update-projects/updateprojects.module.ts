import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProjectsComponent } from './update-projects.component';
import { UpdateProjectsRouting } from './update-projects.routing';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UpdateProjectsComponent],
  imports: [
    CommonModule,
    UpdateProjectsRouting,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ]
})
export class UpdateprojectsModule { }
