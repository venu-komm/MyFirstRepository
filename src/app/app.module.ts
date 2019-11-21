import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeService } from './Services/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { from } from 'rxjs';
import { NewemployeeComponent } from './newemployee/newemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    NavComponent,
    AboutComponent,
    ContactUsComponent,
    EmployeeComponent,
    MatConfirmDialogComponent,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  //declarations: [],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
