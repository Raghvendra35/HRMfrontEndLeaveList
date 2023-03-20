import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFirstComponent } from './home-first.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFirstComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFirstRoutingModule { 
  


}
