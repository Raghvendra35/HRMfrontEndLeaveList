import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Employee, Qualification } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import baseURL from '../help';

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



  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private httpClient: HttpClient)
  {
    this.route.params.subscribe(parm=>
      {
        console.log(parm);
        this.employeeId=parm['id'];
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

}
