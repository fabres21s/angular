import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {FrutaComponent} from '../app/fruta/fruta.component';
import {EmpleadoComponent} from '../app/empleado/empleado.component'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent, 
    EmpleadoComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
