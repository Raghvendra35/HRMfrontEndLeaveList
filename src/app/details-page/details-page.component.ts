import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Employee, Qualification } from '../employee';
import { EmployeeService } from '../employee.service';

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
   employee: Employee=new Employee();
   address: Address=new Address();
   qualification: Qualification=new Qualification();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute)
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
        
      }), (error)=>
      {
       console.log(error);
      }
  }










  //Related to Uploads  Files Codes Here 
  
   SelectFile: File;
   currentFile: File;


  selectFile(event,id)
  {

       console.log(event.target.files);
       this.SelectFile=event.target.files[0];
       this.uploadFile(id)
    }



  uploadFile(empId: any)
  {
    
   const formData: FormData=new FormData();
   console.log("Inside Form Data==========================");
   console.log(empId);
   console.log("+++++++++++++++++++++++++++++");
   console.log(this.SelectFile)
       
   formData.append("files", this.SelectFile);

   this.employeeService.uploadFiles(empId, formData).subscribe((data)=>
   {
    alert("Failed !!!");
   },(error)=>
   {
     alert("Saved!!!");
   });

  }

}
