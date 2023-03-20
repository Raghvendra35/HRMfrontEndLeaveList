import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateProjectsComponent } from "./update-projects.component";

const routs:Routes = [
    {
        path:'/updateproject',
        component:UpdateProjectsComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class UpdateProjectsRouting{

}