import { Component,Output,EventEmitter} from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario-historial',
  templateUrl: './formulario-historial.component.html',
  styleUrls: ['./formulario-historial.component.scss']
})
export class FormularioHistorialComponent  {
  @Output () public secc = new EventEmitter<Seccion>();

  public seccion:Seccion={
    nombreSeccion:''
  }

  public cambiarSeccion (evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion=elemento.value;
  }

  public crearClase():void{
    const copia2:Seccion= {...this.seccion};
    this.secc.emit(copia2);
    this.seccion.nombreSeccion='';
  }

}
