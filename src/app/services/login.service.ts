import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './help';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor( private httpClient:HttpClient) { }

  // loginUser(employee :Employee):Observable<object>{
  //   console.log(employee);
  //   return this.httpClient.post(`${baseURL}/employee/save`,employee);
  // }



//  public genarateToken(credentials:any){
//     return this.httpClient.post(`${baseURL}/api/security/authenticate`,credentials)

//   }



  // Generate Token and Login
  public generateToken(loginData:any){
    return this.httpClient.post(`${baseURL}/api/security/authenticate`,loginData);
  }
  
  //login user:set token in localStorage
  public loginUser(token,role){
    localStorage.setItem('token',token);
    localStorage.setItem('role', role);
    return true;
  }
  

  
  //isLoggin user is login or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("login")
    if(tokenStr == undefined || tokenStr == ''|| tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }
  
  //LogOut:remove token from local storage
  public logOut(){
    localStorage.removeItem("token");
    return true;
  }
  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, token);

  //   const user = this.getUser();
  //   if (user.id) {
  //     this.setUser({ ...user, accessToken: token });
  //   }
  // }

  // public getToken(): string | null {
  //   return window.sessionStorage.getItem(TOKEN_KEY);
  // }
  

  //get token
  public getToken(){
    return  JSON.parse(localStorage.getItem("login")) ;
  }

  //set userDetail
  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //get User
  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }
    else{
      this.logOut();
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let user=this.getUser();
  }
}
