import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './help';

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
    let tokenStr=localStorage.getItem("token")
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
  
  //get token
  public getToken(){
    return localStorage.getItem("token");
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
