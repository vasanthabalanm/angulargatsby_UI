import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValidators } from '../Constants/formValidators.constants';
import { CrudEmployeeService } from '../Services/crud-employee.service';
// import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent {
  addEmployeesForm: FormGroup;
  enteredValues: any = [];

  constructor(private form_builder: FormBuilder, private route: Router, private setval: CrudEmployeeService) {
    this.addEmployeesForm = this.form_builder.group({
      managerName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(formValidators.name), this.nonamespaces]],
      managerID: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      managerMailID: ['', [Validators.required, Validators.pattern(formValidators.mail)]],
      managerPhoneNumber: ['', [Validators.required, Validators.pattern(formValidators.phone)]],
      employeeDetails: this.form_builder.array([])
    });
    this.loadManagerDetails();
    const editedEmployee = this.setval.getEmployee();
    console.log(editedEmployee)
    // console.log(editedEmployee.length)

    if (editedEmployee) {
      if(editedEmployee.length>0){
        for (const employee of editedEmployee){
          (this.addEmployeesForm.get('employeeDetails') as FormArray).push(
            this.form_builder.group({
              Employeename: [employee.Employeename],
              EmployeeID: [employee.EmployeeID],
              EmployeeRole: [employee.EmployeeRole],
              EmployeePhone: [employee.EmployeePhone],
              EmployeeMail: [employee.EmployeeMail]
            })
          );
        }
        
      }
    }
    
  }

  loadManagerDetails() {
    const managerDetails = this.setval.get_values();
    if (managerDetails) {
      this.addEmployeesForm.patchValue({
        managerName: managerDetails.managerName || '',
        managerID: managerDetails.managerID || '',
        managerMailID: managerDetails.managerMailID || '',
        managerPhoneNumber: managerDetails.managerPhoneNumber || ''
      });
    }
  }
  addEmployeeData() {
    const enteredValue = this.addEmployeesForm.get('employeeDetails') as FormArray;
    enteredValue.push(
      this.form_builder.group({
        Employeename: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(formValidators.name), this.nonamespaces]],
        EmployeeID: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        EmployeeRole: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(formValidators.name), this.nonamespaces]],
        EmployeePhone: ['', [Validators.required, Validators.pattern(formValidators.phone)]],
        EmployeeMail: ['', [Validators.required, Validators.pattern(formValidators.mail)]]
      })
    );
  }

  get managernames() {
    return this.addEmployeesForm.get('managerName');
  }
  get managerid() {
    return this.addEmployeesForm.get('managerID');
  }
  get managermail() {
    return this.addEmployeesForm.get('managerMailID');
  }
  get managerphone() {
    return this.addEmployeesForm.get('managerPhoneNumber');
  }
  get employeename() {
    return this.addEmployeesForm.get('employeeDetails')?.get('Employeename')
  }

  removeEmployeeData(indexValue: number) {
    const enteredValues = this.addEmployeesForm.controls['employeeDetails'] as FormArray;
    enteredValues.removeAt(indexValue);

  }

  getEmployeeDetailsControls() {
    return (this.addEmployeesForm.get('employeeDetails') as FormArray).controls;
  }

  employeeDetailsSubmitted() {
    if (this.addEmployeesForm.get('employeeDetails')?.value.length === 0) {
      alert('please enter the Employee details before you submit!');
      console.log('please enter value');
    }
    else {
      console.log(this.addEmployeesForm.value);
      this.setval.set_values(this.addEmployeesForm.value);
      this.route.navigate(['/crudemployee'])
      this.addEmployeesForm.get('employeeDetails')?.reset();
    }
  }

  nonamespaces(empname: AbstractControl) {
    const employename = empname.value;
    if (employename && ((employename.startsWith(' ') || (employename.endsWith(' '))))) {
      return { nonamespaces: true }
    }
    return null;
  }

  Validateinput(pressedvalue: any): void {
    let inputvalues = pressedvalue.target.value;
    inputvalues = inputvalues.replace(/[!@#$%^&*()_+1234567890-=`~,.;]/g, '')
    pressedvalue.target.value = inputvalues;
  }
  noalphabets(enteredvalue: any) {
    let noalphachars = enteredvalue.target.value;
    noalphachars = noalphachars.replace(/[^+0-9-]/g, '')
    enteredvalue.target.value = noalphachars;
  }

  finderrorinFormarray(index: number) {
    this.enteredValues = this.addEmployeesForm.get('employeeDetails') as FormArray;
    const formgrop = this.enteredValues.controls[index] as FormGroup;
    return formgrop;
  }
}
