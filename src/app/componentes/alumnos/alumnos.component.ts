import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { Registro } from 'src/app/modelo/registro';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  @Input () public alumno!:Alumno;
  @Input () public registro!:Registro;

  fecha=Date.now();

}
