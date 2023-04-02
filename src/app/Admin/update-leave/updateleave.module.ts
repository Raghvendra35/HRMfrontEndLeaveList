import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateLeaveRouting } from './update-leave.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateLeaveComponent } from './update-leave.component';



@NgModule({
  declarations: [UpdateLeaveComponent],
  imports: [
    CommonModule,
    UpdateLeaveRouting,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class UpdateleaveModule { }
