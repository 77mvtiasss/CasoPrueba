import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ListarHistorialComponent } from './componentes/listar-historial/listar-historial.component';
import { FormularioHistorialComponent } from './componentes/formulario-historial/formulario-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ListarAlumnosComponent,
    FormularioAlumnoComponent,
    HistorialComponent,
    ListarHistorialComponent,
    FormularioHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
