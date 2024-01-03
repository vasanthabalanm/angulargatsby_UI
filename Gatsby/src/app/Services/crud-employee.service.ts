import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeeService {

  private selectedEmployee: any;

  constructor() { }

  // setEmployee(employee: any) {
  //   this.selectedEmployee = employee;
  // }

  // getEmployee(): any {
  //   return this.selectedEmployee;
  // }

  setEmployee(employee: any) {
    this.selectedEmployee = employee;
  }

  getEmployee(): any {
    return this.selectedEmployee;
  }
  
  get_values():any{
    return JSON.parse(sessionStorage.getItem('Manager Data')||'{}');
  }

  set_values(data:any){
    sessionStorage.setItem('Manager Data',JSON.stringify(data));
  } 

  remove_employee(indexValue:any) {
    sessionStorage.removeItem(indexValue);

  }
}
