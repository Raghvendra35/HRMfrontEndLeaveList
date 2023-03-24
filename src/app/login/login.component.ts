import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
// emailId: any;
   
  constructor(private loginService:LoginService,private _router:Router){}

  credentials={
    username:'',
    password:'',
  };

  ngOnInit(){

  }
    
  formSubmit(){
    console.log("Login button submitt....!");
    
    if((this.credentials.username.trim() != '' && this.credentials.username!=null) 
    && (this.credentials.password.trim() != '' && this.credentials.password != null)){
 
      this.loginService.generateToken(this.credentials).subscribe((data:any)=>{
        console.log(data.token);
        this.loginService.loginUser(data.token, data.role);
         
        console.log("Check the token and Role ========");
        console.log(data.token);
        console.log(data.role);
        console.log("Checking Inside Data");
        console.log(data);
        console.log(data.navs[0]);
        console.log(data.navs[0].permission);
        


        alert("Login successfully .....:)");
        this._router.navigate(['/admin'])
      },(error)=>{
        alert("Failed Login !!!");
        this._router.navigate(['/login'])

        console.log(error);
        console.log("Error...!");
    });
      
    }
   
  }

}
