/**
 * Define el men� - componente principal
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
           <router-outlet></router-outlet>
            `,
})


export class AppComponent {
  title = 'Tour of Heroes';
}