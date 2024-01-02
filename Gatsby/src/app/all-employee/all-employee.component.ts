import { Component } from '@angular/core';
import { FormStoreValuesServiceService } from '../Services/form-store-values-service.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent {
  employeeData :any= [];

  constructor( private getval:FormStoreValuesServiceService){}

  ngOnInit() {
    this.employeeData = this.getval.set_values();
  }
}
