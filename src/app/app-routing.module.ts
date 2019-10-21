import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [
{path: 'list', component: ListEmployeesComponent},
{path: 'create', component: CreateEmployeeComponent},
{path: '', redirectTo: '/list',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
