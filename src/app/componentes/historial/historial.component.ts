import { Component, Input } from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {
  @Input() public seccion!:Seccion;

}
