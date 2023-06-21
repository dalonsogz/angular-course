import { Injectable } from '@angular/core';

@Injectable()
export class ServicioEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string) {
    
    alert(mensaje);
     
  }
}
