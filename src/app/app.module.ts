import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { DetailsComponent } from '../components/details/details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from '../components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DialogComponent,
    DynamicFormComponent,
    DetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
