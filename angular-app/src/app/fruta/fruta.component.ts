import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  public nombre: string;
  public edad: number;
  public mayorDeEdad: boolean;
  public trabajos: Array<any>;
  comodin: any;


  constructor() {

    this.nombre = 'Andr�s';
    this.edad = 29;
    this.mayorDeEdad = true;
    this.trabajos = ['xxx', 123, 'yyy'];
    this.comodin = "74a";
    console.log("fin del constructor");
  }
  
  ngOnInit() {
    //se llama autom�ticamente despu�s del constructor
    //usado para llamar m�todos cuando se carga la p�gina, para no hacerlo en el constructor
    console.log("Inicio del ngOnInit");
  }
}