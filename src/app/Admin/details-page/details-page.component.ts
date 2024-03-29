
// import { Component, OnInit } from '@angular/core';
// //:src/app/Admin/details-page/details-page.component.ts
// import { ActivatedRoute } from '@angular/router';

// import { ActivatedRoute, Router } from '@angular/router';
// import { Address, Employee, Qualification } from '../employee';
// import { EmployeeService } from '../employee.service';
// //>>>>>>> 709eb5124134903bde4c20f86f53a1c12ce367fb:src/app/details-page/details-page.component.ts
// import { HttpClient } from '@angular/common/http';
// import { Address, Employee, Qualification } from 'src/app/services/employee';
// import { EmployeeService } from 'src/app/services/employee.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Employee, Qualification } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import baseURL from 'src/app/services/help';
import { LeaveManage } from 'src/app/services/leave';
import { LeaveService } from 'src/app/services/leave.service';
//<<<<<<< HEAD:src/app/Admin/details-page/details-page.component.ts
// import { ActivatedRoute, Router } from '@angular/router';
// //=======
// import { ActivatedRoute, Router } from '@angular/router';
// import { Address, Employee, Qualification } from '../employee';
// import { EmployeeService } from '../employee.service';
// //>>>>>>> 709eb5124134903bde4c20f86f53a1c12ce367fb:src/app/details-page/details-page.component.ts
// import { HttpClient } from '@angular/common/http';
// import { Address, Employee, Qualification } from 'src/app/services/employee';
// import { EmployeeService } from 'src/app/services/employee.service';
// import baseURL from 'src/app/services/help';



// import { LeaveManage } from '../leave';
// import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})


export class DetailsPageComponent implements OnInit 
{





  employeeList :Array<any>=[];

   employeeId:number;
   id: number;
   //details:Array<any>=[];
    employeedetails:any;
 // employeedetails: Employee=new Employee();
   employee: Employee=new Employee();
   address: Address=new Address();
   qualification: Qualification=new Qualification();



   //Related to Image
     typeof="image";
     fileType="resume"

    //  retrievedResponse: any;
    //  base64Data: any;
    //  retrievedImage: any;
    //  holdResume:any;


   //End  here  Related of image Variable


   leftLeave: any;



  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute, 
              private httpClient: HttpClient,
              private leaveService: LeaveService,
              private router: Router)
  {
    this.route.params.subscribe(parm=>
      {
        console.log(parm);
        this.employeeId=parm['id'];
        console.log("inside Details Page Constructor ========");
        console.log(this.employeeId);
        
        
      })
  }


  
 // getEmployeeById()
  //{
   // this.employeeService.getEmployeeById(this.employeeId).subscribe(data=>
   //{
   //  this.details=data;
 //   this.employee=data;
   //}), (error)=>
  // {
   // console.log(error);
   //}
  //}



  

  ngOnInit(): void 
  {
  
    //this.getEmployeeById();

  let res=this.employeeService.getEmployeeById(this.employeeId);
   res.subscribe(data=>
    
      {
        this.employeedetails=data;
        console.log(this.employeedetails);
        
      }, (error)=>
      {
       console.log(error);
      })
     
      
     // this.showImage(this.employeeId, this.typeof);

    //  this.downloadResume(this.employeeId, this.fileType);
      // this.employeeService.getImage(this.employeeId, this.typeof).subscribe(res=>
      // {
      //   console.log("Related of image ................................................");
      //   console.log(res);
      //   console.log("Related of image ................................................");
        
      //   this.retrievedResponse=res;
      //   this.base64Data=this.retrievedResponse.picByte;
      //   this.retrievedImage=`api/getfile/${this.employeeId}/${this.typeof}`;

      // },(error)=>
      // {
      //   console.log(error);
        
      // })
      
    



      this.leaveService.getSingleEmployeeLeave(this.employeeId).subscribe(data=>
        {
          console.log("Left Leave +++++++++++++++++++++++++++++++++++++++++++++=");
          console.log(data);
          this.leftLeave=data;
                    
        })
  }










  //Related to Uploads  Files Codes Here 
  
   SelectFile: File;
   currentFile: File;


  selectFile(event,id, typeOfFile:any)
  {
      console.log("Types ++++++++++++++++++++++++++++++++++++");
      console.log(typeOfFile);
      console.log("++++++++++++++++++++++++++++++++++++");
      
      console.log(event.target.files);
       this.SelectFile=event.target.files[0];
       this.uploadFile(id,typeOfFile)
    }



  uploadFile(empId: any, typeOfFile)
  {
    
   const formData: FormData=new FormData();
   console.log("Inside Form Data==========================");
   console.log(empId);
   console.log("+++++++++++++++++++++++++++++");
   console.log(this.SelectFile)
       
   formData.append("files", this.SelectFile);

   this.employeeService.uploadFiles(empId,typeOfFile, formData).subscribe((data)=>
   {
    alert("Failed !!!");
   },(error)=>
   {
     alert("Saved!!!");
   });

  }



  downloadFile()
  {
    console.log("Download files +++++++++++++++++++++++++++++++++++++++++++");
    console.log(this.employeeId);
    console.log(this.fileType);
    
    this.downloadResume(this.employeeId,this.fileType);

  }


 //Display Resume
  downloadResume(empId:any, typeOfFiles:any)
  {
    this.httpClient.get<any>(`${baseURL}/api/getfile/${empId}/${typeOfFiles}`).subscribe(blob=>
      {
        console.log("Inside DownlaodResume =================================");
        console.log(blob);
 
        
      })
   
  }



  
  //Add Leave
  
    leaveManage: LeaveManage=new LeaveManage();

    displayStyle = "none";

   openPopup()
             {
              this.displayStyle = "block";
             
          }

        closePopup() {
                    this.displayStyle = "none";
                    }


       leaveSubmit()
       {
        console.log("Leave Manage =================");
        console.log(this.leaveManage);
        console.log(this.employeedetails.employeeId);
        
        this.leaveService.saveLeaveManage(this.leaveManage,this.employeedetails.employeeId).subscribe(data=>
          {
            alert("Saved !!!");
            this.router.navigate(['employeelist']);
           },(error)=>
           {
             alert("Failed !!!");
           });
        
        
       }     
       
       



}
