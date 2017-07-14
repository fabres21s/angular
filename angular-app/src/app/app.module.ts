import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel,  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatepickerModule } from 'ngx-bootstrap';

import {DatepickerDemoComponent} from './datepicker/datepicker-demo.component';
import {InputDateValidatorComponent} from './input-date-validator/input-date-validator.component';




@NgModule({
  declarations: [
    AppComponent,
    DatepickerDemoComponent,
    InputDateValidatorComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    DatepickerModule.forRoot()
  ],

  providers: [NgModel, 
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
