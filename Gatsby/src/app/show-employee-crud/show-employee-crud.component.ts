import { Component } from '@angular/core';
import { CrudEmployeeService } from '../Services/crud-employee.service';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-show-employee-crud',
  templateUrl: './show-employee-crud.component.html',
  styleUrls: ['./show-employee-crud.component.css']
})
export class ShowEmployeeCrudComponent {
  employeeData :any= {};

  constructor(private router:Router, private setval:CrudEmployeeService){}

  ngOnInit() {
    this.employeeData = this.setval.get_values();
  }

  // editEmployee(index: number) {
  //   const selectedEmployee = this.employeeData.employeeDetails[index];
  //   this.setval.setEmployee(selectedEmployee);
  //   this.router.navigate(['/enteremployee']);
  // }

  editEmployee() {
    const selectedEmployee = this.employeeData.employeeDetails;
    console.log(selectedEmployee)
    this.setval.setEmployee(selectedEmployee);
    this.router.navigate(['/enteremployee']);
  }

  // editEmployee() {
  //   // const selectedEmployee = this.employeeData.employeeDetails[index];
  //   this.setval.setEmployee(this.employeeData);
  //   this.router.navigate(['/enteremployee']);
  // }

  delete_employee(indexValue: number) {
    const employeeDetai = this.employeeData.employeeDetails;
    if (employeeDetai && employeeDetai.length > indexValue) {
      employeeDetai.splice(indexValue, 1);
      this.setval.set_values(this.employeeData);
      if (employeeDetai.length === 0) {
        this.setval.remove_employee('Manager Data');
      }
    }
  }
}
