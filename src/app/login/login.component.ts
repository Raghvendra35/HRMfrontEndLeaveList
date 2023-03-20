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
      // this.snack.open("Username is requiered.....!",'',{
      //     duration:3000,
      // });
      this.loginService.generateToken(this.credentials).subscribe((data:any)=>{
        console.log(data.token);
        this.loginService.loginUser(data.token);
        // window.location.href="/employeelist"
        this._router.navigate(['/admin'])
        alert("you are successfully ragistered......:)");
      },(error)=>{
        this._router.navigate(['/login'])

        console.log(error);
        console.log("Error...!");
    });
      
    }
   
  }

}
