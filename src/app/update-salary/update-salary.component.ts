import { Component, OnInit } from '@angular/core';
import { AddSalary } from '../salary';
import { SalaryService } from '../salary.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';


@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.css']
})

export class UpdateSalaryComponent implements OnInit
{
    salaryId: number;
    id: number;

    addSalary: AddSalary=new AddSalary();
    employee:  Employee=new Employee();

    constructor(private salaryService: SalaryService,
                private route: ActivatedRoute)
                {
                  this.route.params.subscribe(parm=>
                    {
                      console.log(parm);
                      this.salaryId=parm['id'];
                    })
                }

  ngOnInit(): void 
  {
    
    this.salaryService.getSalaryById(this.salaryId).subscribe(data =>
    {
      console.log(data);
      this.addSalary=data;
    }, error=> console.log(error));
  }

  updateSalary()
  {

  }

  getEmployeeId(a:any){
    console.log(a);
    
  }


  formSubmit()
  {

   this.salaryService.updateSalary(this.salaryId, this.addSalary).subscribe((data)=>
   {
    console.log(data);

    alert("Updated !!!");
   }, (error)=>
   {
      alert("failed");
   })


  }
}
