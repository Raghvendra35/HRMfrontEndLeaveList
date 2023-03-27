import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
//import { AuthGuard } from "src/app/services/auth.guard";
import { AddSalaryComponent } from "./add-salary.component";

const routs:Routes = [
    {
        path:'/admin/salarylist',
        component:AddSalaryComponent,
       // canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class AddSalaryRoutingModule{

}