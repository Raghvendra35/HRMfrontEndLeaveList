import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AdminComponent } from './admin.component';
import { CreatepdfComponent } from './createpdf/createpdf.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EmployeeFilesComponent } from './employee-files/employee-files.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeFirstComponent } from './home-first/home-first.component';
import { HomeComponent } from './home/home.component';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';
import { LeaveReportEmployeeComponent } from './leave-report-employee/leave-report-employee.component';
import { LeaveemployeeListComponent } from './leaveemployee-list/leaveemployee-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RegistrationEmployeeComponent } from './registration-employee/registration-employee.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { TestingComponent } from './testing/testing.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { UpdateProjectsComponent } from './update-projects/update-projects.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    // redirectTo:'',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home-first/home-first.module').then((m) => m.HomeFirstModule)
         

        },

        //Employee Routing
      {
        path: 'employeelist',
        loadChildren: () =>
          import('./employee-list/employee-list.module').then((m) => m.EmployeeListModule)
        },


        {
          path:'registration',
          loadChildren:() =>
          import('./registration-employee/registration-employee.module').then((m) =>m.RegistrationEmployeeModule)
        },

       {
        path: 'updateemployee/:id',
        loadChildren: () =>
        import('./update-employee/updateemployee.module').then((m)=> m.UpdateemployeeModule)
       },
      
       {
        path: 'employeelist/detailspage/:id',
        loadChildren: () =>
        import('./details-page/details-page.module').then((m)=> m.DetailsPageModule)
       },

 //Projects
      {
        path: 'projectlist',
        loadChildren: () =>
          import('./projects-list/projects-list.module').then((m) => m.ProjectsListModule)

      }, 
      {
        path: 'admin/updateproject/admin/updateproject/:id',
        loadChildren: () =>
        import('./update-projects/updateprojects.module').then((m)=> m.UpdateprojectsModule)
      },

      {
        path:'addproject',
        loadChildren:() =>
        import('./add-project/add-project.module').then((m) => m.AddProjectsModule)
      },
    
    //Salary  

      {
        path:'salarylist',
        loadChildren:() =>
         import('./salary-list/salary-list.module').then((m) => m.SalaryListModule)
      },

      
      {
        path:'admin/updatesalary/:id',
        loadChildren:() =>
         import('./update-salary/updatesalary.module').then((m) => m.UpdatesalaryModule)
      },

      {
        path:'leavelist',
        loadChildren:() =>
        import('./leaveemployee-list/leaveemployee-list.module').then((m) => m.LeaveemployeeListModule)
      },
      {
        path:'admin/updateleave/:id',
        loadChildren:() =>
        import('./update-leave/updateleave.module').then((m) => m.UpdateleaveModule)
      },
      {
        path:'addsalary',
        loadChildren:() =>
        import('./add-salary/add-salary.module').then((m) => m.AddSalaryModule )
      },
      
     
      
      {
        path:'leavereport',
        loadChildren:() =>
        import('./leave-report-employee/leave-report-employee.module').then((m) => m.LeaveReportEmployeeModule)
      },

      //  {
      //   path:'',
      //   redirectTo:'',
      //    pathMatch:'full'
      // }
   ],
  

   //  canActivate: [AuthGuard],
    //  canActivate: [AuthGuard],
    }
]
  // {
  //   path: 'admin', component: AdminComponent,
  //   children:[
  //     {path: '', component: HomeComponent}
  //   ],
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: 'ROLE_ADMIN'
  //   }
  // }

  // {path: 'home', component: HomeComponent},
  // {path: '/home2', component: HomeFirstComponent},
  //  {path: 'employeelist', component: EmployeeListComponent,canActivate:[AuthGuard]},
  
  // {path: 'employeelist/registration', component: RegistrationEmployeeComponent,canActivate:[AuthGuard]},
  // {path: 'updateemployee/:id', component: UpdateEmployeeComponent,canActivate:[AuthGuard]},
  // {path: 'leavereport', component: LeaveReportEmployeeComponent,canActivate:[AuthGuard]},
  // {path: 'leavelist', component: LeaveemployeeListComponent,canActivate:[AuthGuard]},
  // {path: 'leavelist/leavereport', component: LeaveReportEmployeeComponent,canActivate:[AuthGuard]},
  // {path: 'leavelist/updateleave/:id', component: UpdateLeaveComponent,canActivate:[AuthGuard]},
  // {path: 'updateleave/:id', component: UpdateLeaveComponent,canActivate:[AuthGuard]},
  // {path: 'addreport', component: AddProjectComponent,canActivate:[AuthGuard]},
  // {path: 'projectlist/addproject', component: AddProjectComponent,canActivate:[AuthGuard]},
  // {path: 'projectlist', component: ProjectsListComponent,canActivate:[AuthGuard]},
  // {path: 'updateproject/:id', component: UpdateProjectsComponent,canActivate:[AuthGuard]},
  // {path: 'salarylist/addsalary', component: AddSalaryComponent,canActivate:[AuthGuard]},
  // {path: 'salarylist', component: SalaryListComponent,canActivate:[AuthGuard]},
  // {path: 'updatesalary/:id', component: UpdateSalaryComponent,canActivate:[AuthGuard]},
  // {path: 'employeelist/detailspage/:id', component: DetailsPageComponent,canActivate:[AuthGuard]},
  // {path: 'imagelist', component: UploadfilesComponent,canActivate:[AuthGuard]},
  // {path: 'uploadfiles', component: EmployeeFilesComponent,canActivate:[AuthGuard]},
  // {path: 'pdf', component: CreatepdfComponent,canActivate:[AuthGuard]},
  // {path: 'check', component: TestingComponent},
  // {path: 'leavemanage', component: LeaveManageComponent,canActivate:[AuthGuard]},
  // {path: '', redirectTo: '', pathMatch: 'full'}
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
