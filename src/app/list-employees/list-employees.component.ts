import { Component, OnInit, NgModule } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { Employee } from '../Models/Employee.Model';
import { MatDialogService } from '../shared/mat-dialog.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

 employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, 
    private dialogService: MatDialogService) { }

  ngOnInit() {
    this.getEmployees();
  }
  deleteEmployee(empId: number){
      this.dialogService.openConfirmDialog("Are you sure.You want to delete?", "C")
      .afterClosed().subscribe(res=>{
        debugger;
          if(res){
            this.employeeService.deleteEmployeeById(empId).subscribe( ()=>{
              this.getEmployees();
              const dialogRef = this.dialogService.openConfirmDialog("Deleted successfully!", "I");
              dialogRef.updateSize ('80%');
              
              // setTimeout(() => {
              //     dialogRef.close();
              // }, 1000);
            });
          }
      });


    // if(confirm("r u sure?")){
    //   this.employeeService.deleteEmployeeById(empId).subscribe( ()=>{
    //     this.getEmployees();
    //     alert("Deleted...");
    //   });
    // }
  };
  getEmployees():void{

    this.employeeService.getEmployees().subscribe( emp => {
      this.employees = emp;
    });
  };
}
