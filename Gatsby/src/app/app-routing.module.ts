import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatsbyHomeComponent } from './gatsby-home/gatsby-home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component:GatsbyHomeComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
