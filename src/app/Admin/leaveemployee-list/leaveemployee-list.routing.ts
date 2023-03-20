import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveemployeeListComponent } from './leaveemployee-list.component';
const routes: Routes = [
  {
    path: '',
    component: LeaveemployeeListComponent
  },


  // {
  //   path:'login',
  //   component:LoginComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveEmployeeListRoutingModule { }

