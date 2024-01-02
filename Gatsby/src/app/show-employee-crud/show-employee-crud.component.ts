import { Component } from '@angular/core';
import { CrudEmployeeService } from '../Services/crud-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee-crud',
  templateUrl: './show-employee-crud.component.html',
  styleUrls: ['./show-employee-crud.component.css']
})
export class ShowEmployeeCrudComponent {
  employeeData :any= [];

  constructor(private router:Router, private setval:CrudEmployeeService){}

  ngOnInit() {
    this.employeeData = this.setval.get_values();
  }

  editEmployee(index: number) {
    // ... existing code ...
  
    // Save the data to local storage after editing an employee.
    this.router.navigate(['/enteremployee'], { queryParams: { index: index } });
    this.setval.set_values(this.employeeData);
  }
}
