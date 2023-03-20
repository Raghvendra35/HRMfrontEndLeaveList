import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateLeaveComponent } from "./update-leave.component";

const routs:Routes = [
    {
        path:'/updateleave',
        component:UpdateLeaveComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class UpdateLeaveRouting{

}