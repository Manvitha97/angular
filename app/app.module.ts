import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
