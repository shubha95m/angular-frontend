import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseURL = "https://avtar-practice.herokuapp.com/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList( ): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`);
  }
}
