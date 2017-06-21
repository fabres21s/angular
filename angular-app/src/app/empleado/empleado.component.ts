import { Component } from '@angular/core';

import {Empleado} from './empleado';

@Component({

  selector: 'empleado',
  templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
  public titulo = 'Componente empleados';
  public empleado:Empleado;
  
  ngOnInit() {
    this.empleado = new Empleado ('Andrés Sierra', 25, 'developer', true);
    console.log(this.empleado);
  }
}