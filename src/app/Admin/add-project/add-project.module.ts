import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project.component';
import { AddProjectsRoutingModule } from './add-project.routing';


@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    AddProjectsRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class AddProjectsModule { }
