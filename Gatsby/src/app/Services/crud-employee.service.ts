import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeeService {
  
  constructor() { }

  get_values():any{
    return JSON.parse(sessionStorage.getItem('Manager Data')||'{}');
  }

  set_values(data:any){
    sessionStorage.setItem('Manager Data',JSON.stringify(data));
  }

  // set_id(index:any){
  //   sessionStorage.setItem('ID',JSON.stringify(index.))
  // }

  remove_employee(indexValue:any) {
    sessionStorage.removeItem(indexValue);

  }
}
