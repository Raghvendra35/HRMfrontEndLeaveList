import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { AddProjectRoutingModule } from './add-project.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    AddProjectRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule
    
  ]
})
export class AddProjectModule { }
