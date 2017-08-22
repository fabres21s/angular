/**
 * M�dulo donde se establecen las reglas de navegaci�n
 */

import { FileuploadComponent } from './fileupload/fileupload.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
 
//aqu� se har�an consultas (WS) para hacerlo din�mico? 
const routes: Routes = [
  { path: '', redirectTo: '/fileupload', pathMatch: 'full' },
  { path: 'fileupload',  component: FileuploadComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}