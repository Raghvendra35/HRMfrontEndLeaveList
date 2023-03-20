import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { LeaveReportEmployeeComponent } from "./leave-report-employee.component";

const routs:Routes = [
    {
        path:'',
        component:LeaveReportEmployeeComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class LeaveReportEmployeeRouting{

}