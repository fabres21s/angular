/**
 * M�dulo donde se establecen las reglas de navegaci�n
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import {DatepickerDemoComponent} from './datepicker/datepicker-demo.component';
 
 
//aqu� se har�an consultas (WS) para hacerlo din�mico? 
const routes: Routes = [
  { path: 'datepicker',  component: DatepickerDemoComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}