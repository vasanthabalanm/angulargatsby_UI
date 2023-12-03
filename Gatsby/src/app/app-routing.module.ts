import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatsbyHomeComponent } from './gatsby-home/gatsby-home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsConceptComponent } from './forms-concept/forms-concept.component';

const routes: Routes = [
  {path:'', component:GatsbyHomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'forms',component:FormsConceptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
