import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { AddProjectComponent } from "../add-project/add-project.component";

const routs:Routes = [
    {
        path:'/detailpage',
        component:AddProjectComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class AddProjectRouting{

}