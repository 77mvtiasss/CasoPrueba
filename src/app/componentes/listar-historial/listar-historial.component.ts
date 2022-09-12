import { Component, Input} from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.scss']
})
export class ListarHistorialComponent  {
  @Input() seccion!:Array<Seccion>;



}
