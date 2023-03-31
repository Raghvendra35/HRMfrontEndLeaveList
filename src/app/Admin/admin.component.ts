import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent 
{
  constructor(private loginService:LoginService, private router:Router){}
  
   loggedIn=false;

  ngOnInit(){
    console.log("inside admin");
    
    this.loggedIn=this.loginService.isLoggedIn();
    
    console.log(this.loggedIn);
    

  }

  logOutUser()
  {
    this.loginService.logOut();
    this.router.navigate[('/login')];
    window.location.reload();

  }

}
