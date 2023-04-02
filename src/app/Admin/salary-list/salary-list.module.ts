import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list.component';
import { SalaryListRoutingModule } from './salary-list.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SalaryListComponent],
  imports: [
    CommonModule,
    SalaryListRoutingModule,
    RouterModule
    
  ]
})
export class SalaryListModule { }
