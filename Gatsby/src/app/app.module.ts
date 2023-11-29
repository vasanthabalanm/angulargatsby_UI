import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatsbyHomeComponent } from './gatsby-home/gatsby-home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicecontentComponent } from './servicecontent/servicecontent.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    GatsbyHomeComponent,
    FooterComponent,
    ServicecontentComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
