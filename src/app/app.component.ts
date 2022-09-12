import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno';
import { Seccion } from './modelo/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public listaAlumno:Array<Alumno>=[
  ];
  public listarSeccion:Array<Seccion>=[
  ];

  public registrarAlumno (nuevo:Alumno):void{
    this.listaAlumno.push(nuevo);
  }
  public registrarSeccion (nuevo:Seccion):void{
    this.listarSeccion.push(nuevo);
  }
}
