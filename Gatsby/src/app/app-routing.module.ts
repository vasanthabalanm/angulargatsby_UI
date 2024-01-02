import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatsbyHomeComponent } from './gatsby-home/gatsby-home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsConceptComponent } from './forms-concept/forms-concept.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { ShowEmployeeCrudComponent } from './show-employee-crud/show-employee-crud.component';

const routes: Routes = [
  {path:'', component:GatsbyHomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'forms',component:FormsConceptComponent},
  {path:'addemployee',component:AddEmployeeComponent},
  {path:'showemployee',component:AllEmployeeComponent},
  {path:'enteremployee',component:ShowEmployeeComponent},
  {path:'crudemployee',component:ShowEmployeeCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
