import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryListComponent } from './salary-list.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [{
  path:'',component:SalaryListComponent, canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryListRoutingModule { }
