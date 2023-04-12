import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list.component';
import { AuthGuard } from 'src/app/services/auth.guard';



const routes: Routes = [{path: '', component: ProjectsListComponent,
                       }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectsListRoutingModule { }
