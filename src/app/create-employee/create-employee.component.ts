import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from "@angular/forms";
import { EmployeeService } from '../Services/employee.service';
import { Employee } from '../Models/Employee.Model';
import { Router, ActivatedRoute } from "@angular/router";
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  submitted: boolean = false;
  employee: Employee;
  allEmployees: Observable<Employee[]>;
  employee1: Observable<Employee>; 
  designations = [];
  empId: number = 0; 
  constructor(private empService: EmployeeService, 
        private formbuilder: FormBuilder, private router: Router,
        private route: ActivatedRoute ) {}

  ngOnInit(): void {

    this.employeeForm = this.formbuilder.group({
      Name : ['', [Validators.required]],
      Designation: ['',[Validators.required]]
    });
    this.empId = +this.route.snapshot.paramMap.get('id');
    this.designations = this.getDestinations();
debugger;
    this.empService.getEmployeeById(this.empId).subscribe( employee =>{
        this.employeeForm.controls['Name'].setValue( employee == null ? '' : employee.Name);
        this.employeeForm.controls['Designation'].setValue(employee == null ? '' : employee.Designation);   
        // this.employeeForm.controls['EmpId'].setValue(id);
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  getDestinations(){
    return [{id:"SDT",name:"Software Design Trainee"},
    {id:"SDE",name:"Software Design Engineer"},
    {id:"SSDE",name:"Senior Software Design Engineer"},
    {id:"ML",name:"Module Lead"},
    {id:"TL",name:"Technical Lead"},
    {id:"STL",name:"Senior Technical Lead"},
    {id:"ATA",name:"Associate Technical Architect"}]
  }

  SaveEmployee(employee: Employee){
    this.submitted = true;
    if(this.employeeForm.invalid)
    {
      return ;
    }


    if(this.empId > 0){
      employee.EmpId = this.empId;    
    
      this.empService.updateEmployee(employee).subscribe(
        ()=>{
          this.router.navigate(["/list"]);
        }
      )
    }
    else{
      this.empService.createEmployee(employee).subscribe(
        ()=>{
          this.router.navigate(["/list"]);
        }
      )

    }

  }

}
