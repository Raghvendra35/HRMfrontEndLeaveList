import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor(private loginService:LoginService,private router:Router)
    {
        console.log("call interceptor");
        
    }
    
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
        {
            // if( !req.url.startsWith('/login') ){ 
             var newReq=request;
            // console.log(newReq);
            // var  token= this.loginService.getToken().token;   
            
    
            

            var  token= this.loginService.getToken().token;   

            if (token) {
                // If we have a token, we set it to the header
                 if(!request.url.startsWith('/login') ){ 
                request = request.clone({
                   setHeaders: {Authorization: `Bearer ${token}`}
                });
            }
             }
           

             return next.handle(request).pipe(
                 catchError((err) => {
                   if (err instanceof HttpErrorResponse) {
                       if (err.status === 401) {
                       // redirect user to the logout page
                    }
                 }
                 return throwError(err);
               })
              )
             }
        

    }

    

   
     
















































































































































































