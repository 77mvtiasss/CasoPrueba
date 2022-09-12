export type TipoSeccion = 'Remoto'|'Precencial';

export interface Alumno {
  rut:number;
  nombre:string;
  apellido:string;
  edad:number;
  tipo:TipoSeccion;
}
