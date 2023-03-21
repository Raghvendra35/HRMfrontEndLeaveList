import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor(private loginService:LoginService,private router:Router)
    {
        console.log("call interceptor");
        
    }
    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
     {
        let newReq=req;
        console.log(newReq);
        
        let token=this.loginService.getToken();
        console.log(token);
        

        console.log("INTERCEPTER",token);

        if(token != null){
            console.log(req);
             if (req.url.includes('/login')) {
                 console.log('innns');
                
        
               newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
            this.router.navigate(['/admin'])
            }    
        }
        return next.handle(newReq)
    }
     
}








































































































































































































