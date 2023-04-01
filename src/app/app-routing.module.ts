import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './Admin/projects-list/projects-list.component';
import { LoginComponent } from './login/login.component';
 import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
            //  {path:'', component: LoginComponent},
          
  // {path: 'admin',
  //   component: AdminComponent,
  //   // canActivate: [AuthGuard],
  //   // children: [
  //   //   {
  //   //     path: '/employeelist', component: EmployeeListComponent,
  //   //     canActivateChild: [AuthGuard],
        
  //   //   }
  //   // ]
  // },
{
    path: 'admin',
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
      // canActivate:[AuthGuard]
  },
  {
    path:'login', component:LoginComponent
  },
  // {path:'projectlist', component: ProjectsListComponent

  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

