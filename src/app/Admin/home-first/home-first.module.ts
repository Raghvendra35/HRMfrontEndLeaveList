import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFirstRoutingModule } from './home-first-routing.module';
import { RouterModule } from '@angular/router';
import { HomeFirstComponent } from './home-first.component';


@NgModule({
  declarations: [HomeFirstComponent],
  imports: [
    CommonModule,
    HomeFirstRoutingModule,RouterModule
  ]
})
export class HomeFirstModule { }
