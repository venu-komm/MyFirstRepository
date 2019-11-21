import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { FormBuilder, Validators } from "@angular/forms"
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee.Model';
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  employeeForm: any;
  empId: number = 0;
 // employees: Employee[] = [];
 employees = new MatTableDataSource<Employee>();
  displayedColumns= ["Name", "Designation", 'details', 'update', 'delete'];
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private employeeService: EmployeeService, 
              private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      Name : ['', [Validators.required]],
      Designation: ['',[Validators.required]]
    });  
    this.clearData();
    this.getEmployees();
  }
  ngAfterViewInit(): void {
    this.employees.sort = this.sort;
    this.employees.paginator = this.paginator
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(emp =>{
      this.employees.data = emp as Employee[];
    })
  }
  loadEmployeeDetails(id:number){
    this.empId = id;
    this.employeeService.getEmployeeById(id).subscribe(emp =>{
      this.employeeForm.controls["Name"].setValue(emp.Name);
      this.employeeForm.controls["Designation"].setValue(emp.Designation);
    });
  }
  submitEmployee(employee: Employee){
    if(this.empId > 0)
    {
      employee.EmpId = this.empId;
      this.employeeService.updateEmployee(employee).subscribe(()=>{
        this.clearData();
        this.getEmployees();
      });
    }
    else{
      employee.EmpId = 0;
      this.employeeService.createEmployee(employee).subscribe(()=>{
        this.clearData();
        this.getEmployees();
      });
    }
  }
  deleteEmployee(empId: number){
    if(confirm("r u sure?")){
      this.employeeService.deleteEmployeeById(empId).subscribe( ()=>{
        this.getEmployees();
        alert("Deleted...");
      });
    }
  };
  clearData(){
    this.employeeForm.controls['Name'].setValue('');
    this.employeeForm.controls['Designation'].setValue('');   
    this.empId = 0;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim().toLowerCase();
    this.employees.filter = filterValue;
  //console.log(this.employees.filter.length);    
  }
  openCreatePopup(){
    
  }
}
