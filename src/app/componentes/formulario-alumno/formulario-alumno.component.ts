import { Component, Output,EventEmitter} from '@angular/core';
import { Alumno, TipoSeccion } from 'src/app/modelo/alumno';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output()public alum =new EventEmitter <Alumno>();

  public Alumno:Alumno={
    rut:0,
    nombre:'',
    apellido: '',
    edad: 0,
    tipo: 'Precencial'
  }
  public cambiarRut (evento:Event): void{
    const app =evento.target as HTMLInputElement;
    this.Alumno.rut=Number.parseInt(app.value);
  }
  public cambiarNombre (evento:Event):void {
    const app = evento.target as HTMLInputElement;
    this.Alumno.nombre= app.value;
  }
  public cambiarApellido (evento:Event):void{
    const app = evento.target as HTMLInputElement;
    this.Alumno.apellido= app.value;
  }
  public cambiarEdad (evento:Event): void{
    const app = evento.target as HTMLInputElement;
    this.Alumno.edad = Number.parseInt(app.value);
  }
  public cambiarTipo (evento:Event): void{
    const app = evento.target as HTMLSelectElement;
    this.Alumno.tipo=app.value as TipoSeccion;
  }

  public registrar(): void{
    const copia:Alumno={...this.Alumno}
    this.alum.emit(copia);
    this.Alumno.nombre='';
    this.Alumno.apellido='';
    this.Alumno.edad=0;
    this.Alumno.tipo='Precencial';
  }


}
