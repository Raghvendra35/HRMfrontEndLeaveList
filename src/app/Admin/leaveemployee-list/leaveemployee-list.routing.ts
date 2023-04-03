import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveemployeeListComponent } from './leaveemployee-list.component';
import { AuthGuard } from 'src/app/services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LeaveemployeeListComponent,canActivate:[AuthGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LeaveEmployeeListRoutingModule { }

