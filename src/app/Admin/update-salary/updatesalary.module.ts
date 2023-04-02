import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSalaryComponent } from './update-salary.component';
import { UpdateSalaryRouting } from './update-salary.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UpdateSalaryComponent],
  imports: [
    CommonModule,
    UpdateSalaryRouting,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ]
})
export class UpdatesalaryModule { }
