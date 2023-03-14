import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient ,private router:Router) { }

  userLogin(login:any)
  {
    // if(login!=null){
    //   this.setToken('sdfadsffhhgjhnmujhhgcnnm');
    // }
    return this.httpClient.post(`api/auth/signin`,login);
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  userSignup(register:any)
  {
   
    return this.httpClient.post(`api/auth/signup`,register);
  }

  setToken(token:string){
localStorage.setItem('token',token)

  }
getToken():string |  null{
return localStorage.getItem('token');
}

isLogedIn(){
return this.getToken()!=null;
}

}
