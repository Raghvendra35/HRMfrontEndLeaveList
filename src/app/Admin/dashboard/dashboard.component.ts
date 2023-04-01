import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empData:any;

  constructor(private employeeService:EmployeeService){}


 
  ngOnInit(): void {
    let res=this.employeeService.CountEmployee();  
    
    res.subscribe((data)=>
    {
     console.log(data);
     this.empData=data;

     console.log(this.empData,"ppppppp")
    })
    
      
  }
  title = 'Google Chart Example';
  type = 'PieChart';
  type1 = 'LineChart';
  type2 = 'ColumnChart';

  // column chart

  columnsChartdata = [
    ['other', 16, 'color: rgb(143, 27, 0)', '$6'],
    ['Architect', 3, 'color: rgb(143, 27, 0)', 3],
    ['Business', 2, 'color: rgb(143, 27, 0)', 2],
    ['Project', 5, 'color: rgb(143, 27, 0)', 4],
    ['developer', 9, 'color: rgb(143, 27, 0)', 4],
  ];
  columnsChartdatacolumn = [
    'Year',
    'value',
    { role: 'style' },
    { role: 'annotation' },
  ];
  columnsChartoptions = {
    title: '',
    tooltip: {
      textStyle: { color: 'blue', fontName: 'Tahoma', fontSize: '15' },
    },
    labels: 'none',
    pieSliceText: 'none',
    pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
    slices: [
      { color: '3eafe0' },
      { color: 'bd6a67' },
      { color: 'b9b262' },
      { color: '6abf7e' },
      { color: '6c95b7' },
    ],
    is3D: false  ,
    fontSize: 9,
    legend: 'dsd',
  };

  // column chart
  pieChartColumns = [
    'Year',
    'value',
    { role: 'style' },
    { role: 'annotation' },
  ];
  pieChartData = [
    ['other', { v: 2, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['Architect', { v: 6, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['Business', { v: 3, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['Project', { v: 8, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['developer', { v: 9, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
  ];

  // Line Chart
  lineChartoptions = {
    tooltip: { isHtml: true },
    legend: 'none',
  };
  lineChartcolumnNames = [
    'Year',
    'value',
    { role: 'style' },
    { role: 'annotation' },
    { type: 'string', role: 'tooltip', p: { html: true } },
  ];
  lineChartdata = [
    ['other', 5, 'color: rgb(143, 27, 0)', '6K', 'Other <br/> $ 6'],
    ['Architect', 7, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
    ['Business', 12, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
    ['Project', 10, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
    ['developer', 8, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
  ];
  


}