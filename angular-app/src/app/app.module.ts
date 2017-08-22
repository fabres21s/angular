import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {FileSelectDirective} from './fileupload/file-select.directive';
import {FileDropDirective} from './fileupload/file-drop.directive';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
   FileuploadComponent,
   FileSelectDirective,
   FileDropDirective
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  providers: [

  ],
  exports: [
     FileSelectDirective,
    FileDropDirective
  ],
  
  bootstrap: [AppComponent]
})


export class AppModule { }
