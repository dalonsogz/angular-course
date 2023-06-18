import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  templateUrl: './caracteristicas-empleados-c.component.html',
  styleUrls: ['./caracteristicas-empleados-c.component.css']
})
export class CaracteristicasEmpleadosCComponent  implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  //constructor(private miServicio:ServicioEmpleadosService) {}

  agregaCaracteristicas(value: string) {
    //this.miServicio.muestraMensaje(value);
    //this.caracteristicasEmpleados.emit(value);
  }

  ngOnInit() {

  }

}
