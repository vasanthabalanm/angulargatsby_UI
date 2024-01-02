import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeeService {
  employee_datas : any[] = [];
  constructor() { }

  // get_values(values:any){
  //   this.employee_datas = values
  // }

  // set_values(){
  //   return this.employee_datas;
  // }


  get_values(){

  }

  set_values(data:any){
    sessionStorage.setItem('Manager Data',JSON.stringify(data));
  }
  // private storageKey = 'employee_data';

  // get_values(): any {
  //   return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  // }

  // set_values(data: any): void {
  //   localStorage.setItem(this.storageKey, JSON.stringify(data));
  // }

  // clearLocalStorage(): void {
  //   localStorage.removeItem(this.storageKey);
  // }
}
