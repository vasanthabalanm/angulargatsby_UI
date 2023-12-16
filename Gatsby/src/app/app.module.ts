import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatsbyHomeComponent } from './gatsby-home/gatsby-home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicecontentComponent } from './servicecontent/servicecontent.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsConceptComponent } from './forms-concept/forms-concept.component';
import { FormsModule } from '@angular/forms';
import { PassFormValueComponent } from './pass-form-value/pass-form-value.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { NgonchangeCompontComponent } from './hookfunctions/ngonchange-compont.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GatsbyHomeComponent,
    FooterComponent,
    ServicecontentComponent,
    HeaderComponent,
    ContactComponent,
    RegisterFormComponent,
    FormsConceptComponent,
    PassFormValueComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    NgonchangeCompontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
