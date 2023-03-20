import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateEmployeeComponent } from "./update-employee.component";

const routs:Routes = [
    {
        path:'/updateemployee',
        component:UpdateEmployeeComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class UpdateEmployeeRouting{

}