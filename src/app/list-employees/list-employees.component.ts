import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  Employees: object[];
  constructor() { 
this.Employees = [
  {EmployeName:"Venu", Designation: "ML"},
  {EmployeName:"Subba Reddy", Designation: "ATA"}
];

  }

  ngOnInit() {
  }

}
