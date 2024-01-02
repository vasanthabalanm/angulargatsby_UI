import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStoreValuesServiceService {
  employee_datas : any[] = [];
  constructor() { }

  get_values(values:any){
    this.employee_datas = values
  }

  set_values(){
    return this.employee_datas;
  }
}
