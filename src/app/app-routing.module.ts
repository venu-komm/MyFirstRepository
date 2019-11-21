import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';


const routes: Routes = [
{path: 'list', component: ListEmployeesComponent, data: { title: 'Employee' }},
{path: 'save/:id', component: CreateEmployeeComponent, data: { title: 'Employee' }},
{path: 'about', component: AboutComponent},
{path: 'contactus', component: ContactUsComponent},
{path: 'employee', component: EmployeeComponent},
{path: 'newemployee', component: NewemployeeComponent},
{path: '', redirectTo: '/list',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
