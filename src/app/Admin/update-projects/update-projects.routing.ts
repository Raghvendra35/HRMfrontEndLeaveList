import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UpdateProjectsComponent } from "./update-projects.component";

const routs:Routes = [
    {
        path:'',
        component:UpdateProjectsComponent,

        
    }
]
@NgModule({
 
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class UpdateProjectsRouting{

}