import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateSalaryComponent } from "./update-salary.component";

const routs:Routes = [
    {
        path:'/updatesalary',
        component:UpdateSalaryComponent,
   
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class UpdateSalaryRouting{

}