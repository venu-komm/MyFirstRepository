import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Employee } from '../Models/Employee.Model';
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeApi = 'https://localhost:44391/api/employee';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{    
    // return this.http.get<Employee[]>(this.employeeApi+ '/GetEmployees').pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
    return this.http.get<Employee[]>(this.employeeApi+ '/GetAll');
  }

  getEmployeeById(empId: number): Observable<Employee>{
    return  this.http.get<Employee>(this.employeeApi + '/GetById/'+empId);
  }

    createEmployee(employee:Employee):Observable<Employee>{
    const httpOptions = {headers: new HttpHeaders({
                  'Content-Type':'application/json'
                }) };
    return this.http.post<Employee>(this.employeeApi+'/Save/', employee, httpOptions);
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put<Employee>(this.employeeApi+'/Update/', employee, httpOptions);
  }

  deleteEmployeeById(empId: number):Observable<Employee>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.delete<Employee>(this.employeeApi+'/Delete/?id='+ empId, httpOptions);
  }

  private handleError(err: HttpErrorResponse ) {
 
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

 
  
}
